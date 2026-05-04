# config system npu-vlink

Configure NPU VDOM link.

## Syntax

```
config system npu-vlink
    Description: Configure NPU VDOM link.
    edit <name>
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| name      | NPU VDOM link name in format      | string | Maximum |         |
|           | npuX_vlink. X means x-th pair of  |        | length: |         |
|           | npu-vlink. Maximum 14 characters. |        | 19      |         |
+-----------+-----------------------------------+--------+---------+---------+

