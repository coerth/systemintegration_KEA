using System;
using Newtonsoft.Json;

public class JsonReader
{
    public static dynamic ReadJSONFromFile(string path)
    {
        try
        {
            string jsonContent = System.IO.File.ReadAllText(path);
            var jsonObject = JsonConvert.DeserializeObject(jsonContent);
            return jsonObject;
        }
        catch (System.IO.FileNotFoundException)
        {
            Console.WriteLine($"Error: File not found at {path}");
        }
        catch (JsonException e)
        {
            Console.WriteLine($"Error parsing JSON: {e.Message}");
        }
        catch (Exception e)
        {
            Console.WriteLine($"An unexpected error occurred: {e.Message}");
        }

        return null;
    }
}