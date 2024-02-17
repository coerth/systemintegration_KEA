using CsvHelper;
using CsvHelper.Configuration;
using System.Collections.Generic;
using System.Dynamic;
using System.Globalization;
using System.IO;

public class CsvReader
{
    public static List<Dictionary<string, object>> ReadCSVFromFile(string path)
    {
        try
        {
            using (var reader = new StreamReader(path))
            using (var csv = new CsvReader(reader, new CsvConfiguration(CultureInfo.InvariantCulture)))
            {
                var records = new List<Dictionary<string, object>>();

                csv.Read();
                csv.ReadHeader();

                while (csv.Read())
                {
                    var record = new Dictionary<string, object>();

                    foreach (var header in csv.Context.HeaderRecord)
                    {
                        var value = csv.GetField(header);
                        record[header] = value;
                    }

                    records.Add(record);
                }

                return records;
            }
        }
        catch (FileNotFoundException)
        {
            Console.Error.WriteLine($"Error: File not found at {path}");
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine($"An unexpected error occurred: {ex.Message}");
        }

        return null;
    }
}
