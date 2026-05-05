# config log memory global-setting

Global settings for memory logging.

## Syntax

```
config log memory global-setting
    Description: Global settings for memory logging.
    set full-final-warning-threshold {integer}
    set full-first-warning-threshold {integer}
    set full-second-warning-threshold {integer}
    set max-size {integer}
end
```

## Parameters

+-------------------------------+-----------------------------------+---------+------------+-----------+
| Parameter                     | Description                       | Type    | Size       | Default   |
+===============================+===================================+=========+============+===========+
| full-final-warning-threshold  | Log full final warning threshold  | integer | Minimum    | 95        |
|                               | as a percent (3 - 100, default =  |         | value: 3   |           |
|                               | 95).                              |         | Maximum    |           |
|                               |                                   |         | value: 100 |           |
+-------------------------------+-----------------------------------+---------+------------+-----------+
| full-first-warning-threshold  | Log full first warning threshold  | integer | Minimum    | 75        |
|                               | as a percent (1 - 98, default =   |         | value: 1   |           |
|                               | 75).                              |         | Maximum    |           |
|                               |                                   |         | value: 98  |           |
+-------------------------------+-----------------------------------+---------+------------+-----------+
| full-second-warning-threshold | Log full second warning threshold | integer | Minimum    | 90        |
|                               | as a percent (2 - 99, default =   |         | value: 2   |           |
|                               | 90).                              |         | Maximum    |           |
|                               |                                   |         | value: 99  |           |
+-------------------------------+-----------------------------------+---------+------------+-----------+
| max-size                      | Maximum amount of memory that can | integer | Minimum    | 168438988 |
|                               | be used for memory logging in     |         | value: 0   | \*\*      |
|                               | bytes.                            |         | Maximum    |           |
|                               |                                   |         | value:     |           |
|                               |                                   |         | 4294967295 |           |
+-------------------------------+-----------------------------------+---------+------------+-----------+

