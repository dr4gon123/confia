# config webfilter ftgd-risk-level

Configure FortiGuard Web Filter risk level.

## Syntax

```
config webfilter ftgd-risk-level
    Description: Configure FortiGuard Web Filter risk level.
    edit <name>
        set high {integer}
        set low {integer}
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+---------+---------+
| Parameter | Description                       | Type    | Size    | Default |
+===========+===================================+=========+=========+=========+
| high      | Risk level high.                  | integer | Minimum | 0       |
|           |                                   |         | value:  |         |
|           |                                   |         | 0       |         |
|           |                                   |         | Maximum |         |
|           |                                   |         | value:  |         |
|           |                                   |         | 100     |         |
+-----------+-----------------------------------+---------+---------+---------+
| low       | Risk level low.                   | integer | Minimum | 0       |
|           |                                   |         | value:  |         |
|           |                                   |         | 0       |         |
|           |                                   |         | Maximum |         |
|           |                                   |         | value:  |         |
|           |                                   |         | 100     |         |
+-----------+-----------------------------------+---------+---------+---------+
| name      | Risk level name.                  | string  | Maximum |         |
|           |                                   |         | length: |         |
|           |                                   |         | 35      |         |
+-----------+-----------------------------------+---------+---------+---------+

