import os
import jinja2

templateLoader = jinja2.FileSystemLoader(searchpath="./")
templateEnv = jinja2.Environment(loader=templateLoader)


TEMPLATE_FILE = "geosylva.xml.template"
template = templateEnv.get_template(TEMPLATE_FILE)
outputText = template.render(URL_GEOSERVER=os.environ["URL_GEOSERVER"])

with open("geosylvax.xml", "w") as f:
    f.write(outputText)
