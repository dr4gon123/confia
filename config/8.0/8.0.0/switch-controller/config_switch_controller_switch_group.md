# config switch-controller switch-group

Configure FortiSwitch switch groups.

## Syntax

```
config switch-controller switch-group
    Description: Configure FortiSwitch switch groups.
    edit <name>
        set description {string}
        set fortilink {string}
        set members <switch-id1>, <switch-id2>, ...
    next
end
```

## Parameters

+---------------+-----------------------------------+--------+---------+---------+
| Parameter     | Description                       | Type   | Size    | Default |
+===============+===================================+========+=========+=========+
| description   | Optional switch group             | string | Maximum |         |
|               | description.                      |        | length: |         |
|               |                                   |        | 63      |         |
+---------------+-----------------------------------+--------+---------+---------+
| fortilink     | FortiLink interface to which      | string | Maximum |         |
|               | switch group members belong.      |        | length: |         |
|               |                                   |        | 15      |         |
+---------------+-----------------------------------+--------+---------+---------+
| members       | FortiSwitch members belonging to  | string | Maximum |         |
| `<switch-id>` | this switch group.                |        | length: |         |
|               |                                   |        | 79      |         |
|               | Managed device ID.                |        |         |         |
+---------------+-----------------------------------+--------+---------+---------+
| name          | Switch group name.                | string | Maximum |         |
|               |                                   |        | length: |         |
|               |                                   |        | 35      |         |
+---------------+-----------------------------------+--------+---------+---------+

