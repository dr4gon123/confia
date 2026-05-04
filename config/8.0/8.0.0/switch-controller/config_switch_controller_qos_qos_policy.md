# config switch-controller qos qos-policy

Configure FortiSwitch QoS policy.

## Syntax

```
config switch-controller qos qos-policy
    Description: Configure FortiSwitch QoS policy.
    edit <name>
        set default-cos {integer}
        set queue-policy {string}
        set trust-dot1p-map {string}
        set trust-ip-dscp-map {string}
    next
end
```

## Parameters

+-------------------+-----------------------------------+---------+---------+---------+
| Parameter         | Description                       | Type    | Size    | Default |
+===================+===================================+=========+=========+=========+
| default-cos       | Default cos queue for untagged    | integer | Minimum | 0       |
|                   | packets.                          |         | value:  |         |
|                   |                                   |         | 0       |         |
|                   |                                   |         | Maximum |         |
|                   |                                   |         | value:  |         |
|                   |                                   |         | 7       |         |
+-------------------+-----------------------------------+---------+---------+---------+
| name              | QoS policy name.                  | string  | Maximum |         |
|                   |                                   |         | length: |         |
|                   |                                   |         | 63      |         |
+-------------------+-----------------------------------+---------+---------+---------+
| queue-policy      | QoS egress queue policy.          | string  | Maximum | default |
|                   |                                   |         | length: |         |
|                   |                                   |         | 63      |         |
+-------------------+-----------------------------------+---------+---------+---------+
| trust-dot1p-map   | QoS trust 802.1p map.             | string  | Maximum |         |
|                   |                                   |         | length: |         |
|                   |                                   |         | 63      |         |
+-------------------+-----------------------------------+---------+---------+---------+
| trust-ip-dscp-map | QoS trust ip dscp map.            | string  | Maximum |         |
|                   |                                   |         | length: |         |
|                   |                                   |         | 63      |         |
+-------------------+-----------------------------------+---------+---------+---------+

