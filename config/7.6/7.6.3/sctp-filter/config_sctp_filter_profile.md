# config sctp-filter profile

Configure SCTP filter profiles.

## Syntax

```
config sctp-filter profile
    Description: Configure SCTP filter profiles.
    edit <name>
        set comment {var-string}
        config ppid-filters
            Description: PPID filters list.
            edit <id>
                set action [pass|reset|...]
                set comment {var-string}
                set ppid {integer}
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+------------+---------+---------+
| Parameter | Description                       | Type       | Size    | Default |
+===========+===================================+============+=========+=========+
| comment   | Comment.                          | var-string | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 255     |         |
+-----------+-----------------------------------+------------+---------+---------+
| name      | Profile name.                     | string     | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 47      |         |
+-----------+-----------------------------------+------------+---------+---------+

