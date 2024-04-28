import json

def search_color(skill):
    json_open =  open("./utils/assets/colors.json")
    dict_json = json.load(json_open)
    return dict_json[skill]["color"]
