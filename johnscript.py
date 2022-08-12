import jinja2

templateLoader = jinja2.FileSystemLoader(searchpath="./")
templateEnv = jinja2.Environment(loader=templateLoader)


TEMPLATE_FILE = "geosylva.xml"
template = templateEnv.get_template(TEMPLATE_FILE)
outputText = template.render(
url_geoserver="http://188.165.118.84/geoserver/geoserver/cite/wms"
) # this is where to put args to the template renderer

print(outputText)
with open("geosylvax.xml", "w") as f:
    f.write(outputText)
