# config wireless-controller hotspot20 h2qp-terms-and-conditions

Configure terms and conditions.

## Syntax

```
config wireless-controller hotspot20 h2qp-terms-and-conditions
    Description: Configure terms and conditions.
    edit <name>
        set filename {string}
        set timestamp {integer}
        set url {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+------------+---------+
| Parameter | Description                       | Type    | Size       | Default |
+===========+===================================+=========+============+=========+
| filename  | Filename.                         | string  | Maximum    |         |
|           |                                   |         | length:    |         |
|           |                                   |         | 254        |         |
+-----------+-----------------------------------+---------+------------+---------+
| name      | Terms and Conditions ID.          | string  | Maximum    |         |
|           |                                   |         | length: 35 |         |
+-----------+-----------------------------------+---------+------------+---------+
| timestamp | Timestamp.                        | integer | Minimum    | 0       |
|           |                                   |         | value: 0   |         |
|           |                                   |         | Maximum    |         |
|           |                                   |         | value:     |         |
|           |                                   |         | 4294967295 |         |
+-----------+-----------------------------------+---------+------------+---------+
| url       | URL.                              | string  | Maximum    |         |
|           |                                   |         | length:    |         |
|           |                                   |         | 253        |         |
+-----------+-----------------------------------+---------+------------+---------+

