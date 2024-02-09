# %%
import os
from pathlib import Path
from file_type_reader import read_JSON_from_file, read_CSV_from_file_pandas, read_XML_from_file, read_YAML_from_file
import xml.etree.ElementTree as ET
from IPython.display import display, HTML

# %%
json_file_path = os.path.join(Path(__file__).parent.parent.parent, 'me.json')
csv_file_path = os.path.join(Path(__file__).parent.parent.parent, 'me.csv')
xml_file_path = os.path.join(Path(__file__).parent.parent.parent, 'me.xml')
yaml_file_path = os.path.join(Path(__file__).parent.parent.parent, 'me.yaml')
txt_file_path = os.path.join(Path(__file__).parent.parent.parent, 'me.txt')

json_data = read_JSON_from_file(json_file_path)
csv_data = read_CSV_from_file_pandas(csv_file_path)
xml_data = read_XML_from_file(xml_file_path)
yaml_data = read_YAML_from_file(yaml_file_path)
txt_data = read_YAML_from_file(txt_file_path)

if xml_data is not None:
    # Display the XML element
    display(HTML(ET.tostring(xml_data, encoding='utf-8').decode()))

if yaml_data is not None:
    print(yaml_data)

# %%
