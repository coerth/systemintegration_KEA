using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Xml;

public class XmlReader
{
    public static dynamic XmlNodeToDynamic(XmlNode node)
    {
        if (node == null)
        {
            return null;
        }

        dynamic dynamicNode = new ExpandoObject();
        dynamicNode.Name = node.Name;

        if (node.Attributes != null)
        {
            dynamicNode.Attributes = new Dictionary<string, object>();

            foreach (XmlAttribute attribute in node.Attributes)
            {
                dynamicNode.Attributes[attribute.Name] = attribute.Value;
            }
        }

        if (node.HasChildNodes)
        {
            dynamicNode.ChildNodes = new List<dynamic>();

            foreach (XmlNode childNode in node.ChildNodes)
            {
                dynamicNode.ChildNodes.Add(XmlNodeToDynamic(childNode));
            }
        }
        
        dynamicNode.Value = node.InnerText;

        return dynamicNode;
    }
}
