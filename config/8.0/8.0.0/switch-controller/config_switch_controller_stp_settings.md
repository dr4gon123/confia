# config switch-controller stp-settings

Configure FortiSwitch spanning tree protocol (STP).

## Syntax

```
config switch-controller stp-settings
    Description: Configure FortiSwitch spanning tree protocol (STP).
    set forward-time {integer}
    set hello-time {integer}
    set max-age {integer}
    set max-hops {integer}
    set name {string}
    set pending-timer {integer}
    set revision {integer}
end
```

## Parameters

+---------------+-----------------------------------+---------+---------+---------+
| Parameter     | Description                       | Type    | Size    | Default |
+===============+===================================+=========+=========+=========+
| forward-time  | Period of time a port is in       | integer | Minimum | 15      |
|               | listening and learning state (4 - |         | value:  |         |
|               | 30 sec, default = 15).            |         | 4       |         |
|               |                                   |         | Maximum |         |
|               |                                   |         | value:  |         |
|               |                                   |         | 30      |         |
+---------------+-----------------------------------+---------+---------+---------+
| hello-time    | Period of time between successive | integer | Minimum | 2       |
|               | STP frame Bridge Protocol Data    |         | value:  |         |
|               | Units (BPDUs) sent on a port (1 - |         | 1       |         |
|               | 10 sec, default = 2).             |         | Maximum |         |
|               |                                   |         | value:  |         |
|               |                                   |         | 10      |         |
+---------------+-----------------------------------+---------+---------+---------+
| max-age       | Maximum time before a bridge port | integer | Minimum | 20      |
|               | expires its configuration BPDU    |         | value:  |         |
|               | information (6 - 40 sec, default  |         | 6       |         |
|               | = 20).                            |         | Maximum |         |
|               |                                   |         | value:  |         |
|               |                                   |         | 40      |         |
+---------------+-----------------------------------+---------+---------+---------+
| max-hops      | Maximum number of hops between    | integer | Minimum | 20      |
|               | the root bridge and the furthest  |         | value:  |         |
|               | bridge (1- 40, default = 20).     |         | 1       |         |
|               |                                   |         | Maximum |         |
|               |                                   |         | value:  |         |
|               |                                   |         | 40      |         |
+---------------+-----------------------------------+---------+---------+---------+
| name          | Name of global STP settings       | string  | Maximum |         |
|               | configuration.                    |         | length: |         |
|               |                                   |         | 31      |         |
+---------------+-----------------------------------+---------+---------+---------+
| pending-timer | Pending time (1 - 15 sec, default | integer | Minimum | 4       |
|               | = 4).                             |         | value:  |         |
|               |                                   |         | 1       |         |
|               |                                   |         | Maximum |         |
|               |                                   |         | value:  |         |
|               |                                   |         | 15      |         |
+---------------+-----------------------------------+---------+---------+---------+
| revision      | STP revision number (0 - 65535).  | integer | Minimum | 0       |
|               |                                   |         | value:  |         |
|               |                                   |         | 0       |         |
|               |                                   |         | Maximum |         |
|               |                                   |         | value:  |         |
|               |                                   |         | 65535   |         |
+---------------+-----------------------------------+---------+---------+---------+

