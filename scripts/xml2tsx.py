#-*- coding: utf-8 -*-

#Requires Python 3.0+

'''
    Convert Oracle Forms' generated XML file to a React component
    page to be used by NextJS
'''

import argparse
import re
import os, os.path
from os import rename, sep
from collections import OrderedDict
import xml.etree.ElementTree as ET

def create_tsx_file(source_dir, source_file, dest_dir, xml_content, tags_list, rename_regex):
    components_import = ',\n\t'.join(tags_list)
    tsx_content = (
        f'import * as React from "react";\n'
        f'import {{\n'
        f'\t{components_import}\n'
        f'}} from "../../../components";\n'
        f'\n'
        f'const Form = () => {{\n'
        f'  return (\n'
        f'{xml_content}\n'
        f')}};\n'
        f'\n'
        f'export default Form;\n'
    )

    if os.path.isdir(dest_dir + os.sep):
        if (rename_regex):
            re_parts = map(lambda x: r'{}'.format(x), rename_regex.split(' => '))
        else:
            re_parts = [r'^(.+)?_fmb.xml$', r'\1.tsx']
        if (len(re_parts) == 2):
            dest_file = re.sub(re_parts[0], re_parts[1], source_file)
            # write output file
            with open(os.path.normpath(dest_dir + os.sep + dest_file), 'w', encoding='utf-8') as fdOut:
               fdOut.write(tsx_content)    

def xml2tsx_file(source_dir, source_file, dest_dir, rename_regex):
    dest_file = source_file.lower().split(os.sep)[-1]
    dest_file = dest_dir + os.sep + ''.join(dest_file.split('.')[:-1]) + '.json'

    # Get the tags used in the XML file
    tags_list = []
    try:
        tree = ET.parse(os.path.normpath(source_dir + os.sep + source_file))
        for elem in tree.iter():
            tag = re.sub(r'^\{.+\}(\w+)$', r'\1', elem.tag)
            if tag != 'Module':
                tags_list.append(re.sub(r'^\{.+\}(\w+)$', r'\1', elem.tag))
        tags_list = list(set(tags_list))
        tags_list.sort()
    except:
        print("Error parsing file %s in %s " % (source_file, source_dir))
        return 0 

    # try:
    with open(os.path.normpath(source_dir + os.sep + source_file), 'r', encoding='utf-8') as fdIn:
        xml_content = fdIn.read()
        xml_content = '\n'.join(xml_content.split('\n')[2:-2])
        create_tsx_file(source_dir, source_file, dest_dir, xml_content, tags_list, rename_regex)
    return 1
    # except:
    #     print("Error opening file %s " % (os.path.normpath(source_dir + os.sep + source_file)))
    #     return 0   

        
def xml2tsx(source_dir, dest_dir, rename_regex):
    count = 0
    files = []
    source_dir = os.path.normpath(source_dir)
    if os.path.isdir(source_dir):
        files = os.listdir(source_dir)
    else:
        if os.path.isfile(source_dir):
            files = [os.path.basename(source_dir)]
            source_dir = os.path.dirname(source_dir)
    for source_file in files:
        extension =  source_file.lower().split('.')[-1]
        if os.path.isfile(os.path.normpath(source_dir + os.sep + source_file)) and extension == 'xml':
            count += xml2tsx_file(source_dir, source_file, dest_dir, rename_regex)
        elif os.path.isdir(source_dir + os.sep + source_file):
            count += xml2tsx(source_dir + os.sep + source_file, dest_dir, rename_regex)
    return count
    
   


# creating parser object
def parse_arguments():
    parser = argparse.ArgumentParser()
    parser.add_argument('--source', nargs='?', help='XML source file or directory')
    parser.add_argument('--dest', nargs='?', help='TSX destination file or directory')
    parser.add_argument('--rename-regex', nargs='?', help='Regular expression to convert destination file names. Example: "^(.+?)_fmb.xml$ => \1"')
    args = parser.parse_args()

    return args


def main():
    args = parse_arguments()

    source_dir = args.source
    if (args.dest):
        dest_dir = os.path.dirname(args.dest + os.sep)
    else:
        if os.path.isdir(source_dir):
            dest_dir = source_dir
        else:
            dest_dir = os.path.dirname(source_dir)
    rename_regex = args.rename_regex 

    count = xml2tsx(source_dir, dest_dir, rename_regex)
    print ("[%d] files converted" % (count))


main()