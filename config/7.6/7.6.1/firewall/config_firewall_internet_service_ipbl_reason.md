# config firewall internet-service-ipbl-reason

IP block list reason. Read-only.

## Syntax

```
config firewall internet-service-ipbl-reason
    Description: IP block list reason. Read-only.
    edit <id>
        set name {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+------------+---------+
| Parameter | Description                       | Type    | Size       | Default |
+===========+===================================+=========+============+=========+
| id        | IP block list reason ID.          | integer | Minimum    | 0       |
|           |                                   |         | value: 0   |         |
|           |                                   |         | Maximum    |         |
|           |                                   |         | value:     |         |
|           |                                   |         | 4294967295 |         |
+-----------+-----------------------------------+---------+------------+---------+
| name      | IP block list reason name.        | string  | Maximum    |         |
|           |                                   |         | length: 63 |         |
+-----------+-----------------------------------+---------+------------+---------+

