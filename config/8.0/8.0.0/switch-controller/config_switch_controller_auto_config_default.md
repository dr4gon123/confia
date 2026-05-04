# config switch-controller auto-config default

Policies which are applied automatically to all ISL/ICL/FortiLink interfaces.

## Syntax

```
config switch-controller auto-config default
    Description: Policies which are applied automatically to all ISL/ICL/FortiLink interfaces.
    set fgt-policy {string}
    set icl-policy {string}
    set isl-policy {string}
end
```

## Parameters

+------------+-----------------------------------+--------+---------+-------------+
| Parameter  | Description                       | Type   | Size    | Default     |
+============+===================================+========+=========+=============+
| fgt-policy | Default FortiLink auto-config     | string | Maximum | default     |
|            | policy.                           |        | length: |             |
|            |                                   |        | 63      |             |
+------------+-----------------------------------+--------+---------+-------------+
| icl-policy | Default ICL auto-config policy.   | string | Maximum | default-icl |
|            |                                   |        | length: |             |
|            |                                   |        | 63      |             |
+------------+-----------------------------------+--------+---------+-------------+
| isl-policy | Default ISL auto-config policy.   | string | Maximum | default     |
|            |                                   |        | length: |             |
|            |                                   |        | 63      |             |
+------------+-----------------------------------+--------+---------+-------------+

