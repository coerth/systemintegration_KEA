from dotenv import dotenv_values, load_dotenv

#example 1
environtment_variables = dotenv_values()
print(environtment_variables)

#example 2
import os
load_dotenv()
print(os.getenv("SOMETHING")) # prints the value of the environment variable SOMETHING