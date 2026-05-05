# config dlp exact-data-match

Configure exact-data-match template used by DLP scan.

## Syntax

```
config dlp exact-data-match
    Description: Configure exact-data-match template used by DLP scan.
    edit <name>
        config columns
            Description: DLP exact-data-match column types.
            edit <index>
                set optional [enable|disable]
                set type {string}
            next
        end
        set data {string}
        set optional {integer}
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+---------+---------+
| Parameter | Description                       | Type    | Size    | Default |
+===========+===================================+=========+=========+=========+
| data      | External resource for exact data  | string  | Maximum |         |
|           | match.                            |         | length: |         |
|           |                                   |         | 35      |         |
+-----------+-----------------------------------+---------+---------+---------+
| name      | Name of table containing the      | string  | Maximum |         |
|           | exact-data-match template.        |         | length: |         |
|           |                                   |         | 35      |         |
+-----------+-----------------------------------+---------+---------+---------+
| optional  | Number of optional columns need   | integer | Minimum | 0       |
|           | to match.                         |         | value:  |         |
|           |                                   |         | 0       |         |
|           |                                   |         | Maximum |         |
|           |                                   |         | value:  |         |
|           |                                   |         | 32      |         |
+-----------+-----------------------------------+---------+---------+---------+

