# %%
import json
import pandas as pd
import xml.etree.ElementTree as ET
import yaml

# %%

def read_JSON_from_file(path: str) -> json:
    try:
        with open(path, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        print(f"Error: File not found at {path}")
    except json.decoder.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

def read_CSV_from_file_pandas(path: str):
    try:
        # Read CSV file into a pandas DataFrame
        df = pd.read_csv(path)
        return df.to_dict(orient='records')
    except FileNotFoundError:
        print(f"Error: File not found at {path}")
    except pd.errors.EmptyDataError:
        print(f"Error: The CSV file at {path} is empty.")
    except pd.errors.ParserError as e:
        print(f"Error parsing CSV: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

def read_XML_from_file(path: str):
    try:
        # Parse the XML file
        tree = ET.parse(path)
        root = tree.getroot()
        return element_to_dict(root)
    except FileNotFoundError:
        print(f"Error: File not found at {path}")
    except ET.ParseError as e:
        print(f"Error parsing XML: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

def element_to_dict(element):
    if len(element) == 0:
        return element.text
    else:
        # Create a dictionary to hold the child elements
        children_dict = {}
        for child in element:
            child_data = element_to_dict(child)
            # If there's already an entry for this tag, append to it
            if child.tag in children_dict:
                # If the entry is not already a list, make it a list
                if not isinstance(children_dict[child.tag], list):
                    children_dict[child.tag] = [children_dict[child.tag]]
                children_dict[child.tag].append(child_data)
            # If there's no entry for this tag, create one
            else:
                children_dict[child.tag] = child_data
        return children_dict

def read_YAML_from_file(path: str):
    try:
        with open(path, 'r') as file:
            data = yaml.load(file, Loader=yaml.FullLoader)
            return data
    except FileNotFoundError:
        print(f"Error: File not found at {path}")
    except yaml.YAMLError as e:
        print(f"Error parsing YAML: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

def read_text_file(file_path):
    try:
        with open(file_path, 'r') as file:
            lines = file.read().splitlines()
        
        # Assuming the order is fixed and known
        data = {
            'name': lines[0],
            'money': int(lines[1]),
            'country': lines[2],
            'alcohol_tolerance': lines[3],
            'hobbies': [hobby.strip() for hobby in lines[4].split(',')]
        }
        
        return data
    except FileNotFoundError:
        print(f"Error: File not found at {file_path}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")