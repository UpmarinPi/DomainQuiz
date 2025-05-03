import requests
from bs4 import BeautifulSoup
import json

url = "https://ja.wikipedia.org/wiki/トップレベルドメイン一覧"
json_path = "./WorldMapList.json"

world_dict_keys = ["Name", "Domain"]

def get_domain_list():
    response = requests.get(url)
    response.encoding = response.apparent_encoding

    soup = BeautifulSoup(response.text, "html.parser")

    heading = soup.find(id="国別コードトップレベルドメイン")
    explanatory = heading.find_next("table")
    main_table = explanatory.find_next("table")

    world_dict_list = []
    rows = main_table.find_all("tr")

    name_index = -1
    entity_index = -1

    # headerを取得、NameとEntityを取得
    try:
        header_row = rows[0]
        header_cols = header_row.find_all()
        header_list = [col.get_text(strip=True) for col in header_cols]
        name_index = header_list.index("Name")
        entity_index = header_list.index("Entity")
    except:
        print("Failed to find the headers")
        return


    for row in rows:
        cols = row.find_all("td")
        cols_text = [col.get_text(strip=True) for col in cols]
        if cols_text:
            try:
                world_dict = dict.fromkeys(world_dict_keys)
                world_dict["Name"] = cols_text[entity_index]
                world_dict["Domain"] = cols_text[name_index]
                world_dict_list.append(world_dict)
            except:
                if cols_text[0]:
                    print(f"{cols_text[0]} has no name or entity")
                continue
    
    return world_dict_list
    
# main

world_dict_list = get_domain_list()

with open(json_path, 'w') as f:
        json.dump(world_dict_list, f, indent=4, ensure_ascii=False)
