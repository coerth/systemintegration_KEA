using System;
using System.IO;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

public class YamlReader
{
    public static dynamic ReadYAMLFromFile(string path)
    {
        try
        {
            var deserializer = new DeserializerBuilder()
                .WithNamingConvention(CamelCaseNamingConvention.Instance)
                .Build();

            using (var reader = new StreamReader(path))
            {
                var yamlObject = deserializer.Deserialize(reader);
                return yamlObject;
            }
        }
        catch (FileNotFoundException)
        {
            Console.WriteLine($"Error: File not found at {path}");
        }
        catch (Exception e)
        {
            Console.WriteLine($"An unexpected error occurred: {e.Message}");
        }

        return null;
    }
}