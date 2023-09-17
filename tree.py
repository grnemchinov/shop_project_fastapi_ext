def build_tree(data: list[dict], parent=None, level=0, parent_id='parent_id', pk_key='id'):
    """
    Build tree from list of dicts
    :param data: list of dicts
    :param parent: parent node
    :param level: level of tree
    :param parent_id: name of parent_id field
    :return: dict
    """
    root = []

    for item in sorted(data, key=lambda x: x.get(parent_id) or '-1'):
        item = dict(item)

        if item.get(parent_id) == parent:
            item['children'] = build_tree(data, item[pk_key], level + 1)

            if not item['children']:
                item['leaf'] = True

            root.append(item)

    return root


def make_tree(data, parent_id='parent_id', pk_key='id', add_checkboxes=False, sort_key=None):
    nodes = {item[pk_key]: item for item in data}

    for node in nodes.values():
        if add_checkboxes:
            node['checked'] = False
        parent = nodes.get(node[parent_id])
        if parent:
            parent['leaf'] = False
            children = parent.setdefault('children', [])
            children.append(node)
            node['leaf'] = True

    if sort_key:
        for node in nodes.values():
            if node.get('children'):
                node['children'] = sorted(node['children'], key=lambda x: x[sort_key])

    return [node for node in nodes.values() if not node[parent_id]]


def find_max_depth(data: list[dict], children_key='children', depth=0):
    """
    Find max depth of tree
    :param data: list of dicts
    :param
    """
    if not data:
        return depth

    return max(find_max_depth(item.get(children_key, []), children_key, depth + 1) for item in data)


def filter_tree(data: list[dict], children_key='children', depth=1, max_depth=0):
    """
    remove node on tree if depth < max_depth and node has no children
    """
    if not data:
        return

    for item in data[:]:

        if item.get('name') == 'Абакан':
            print()

        if depth < max_depth and len(item.get(children_key, [])) == 0:
            data.remove(item)
        else:
            filter_tree(item.get(children_key, []), children_key, depth + 1, max_depth)

    return data