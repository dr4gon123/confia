# config system npu-post

Configure NPU attributes after interface initialization.

## Syntax

```
config system npu-post
    Description: Configure NPU attributes after interface initialization.
    set npu-group-effective-scope {integer}
    config port-npu-map
        Description: Configure port to NPU group list.
        edit <interface>
            set npu-group <group-name1>, <group-name2>, ...
        next
    end
end
```

## Parameters

+---------------------------+-----------------------------------+---------+---------+---------+
| Parameter                 | Description                       | Type    | Size    | Default |
+===========================+===================================+=========+=========+=========+
| npu-group-effective-scope | npu-group-effective-scope defines | integer | Minimum | 255     |
| \*                        | under which npu-group cmds such   |         | value:  |         |
|                           | as list/purge will be excecuted.  |         | 0       |         |
|                           | Default scope is for all four     |         | Maximum |         |
|                           | HS-ok groups. (0-3, default =     |         | value:  |         |
|                           | 255).                             |         | 255     |         |
+---------------------------+-----------------------------------+---------+---------+---------+

