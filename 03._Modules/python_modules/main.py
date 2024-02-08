from my_module import ClassA, ClassB

print("does this work?") 

ClassA()
ClassB()


#encode a string function base64
encoded_string = "Hello World".encode("utf8", "strict")
print(encoded_string)
#decode a string
decoded_string = encoded_string.decode("utf8", "strict")
print(decoded_string)