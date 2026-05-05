# config system lldp network-policy

Configure LLDP network policy.

## Syntax

```
config system lldp network-policy
    Description: Configure LLDP network policy.
    edit <name>
        set comment {var-string}
        config guest
            Description: Guest.
            set dscp {integer}
            set priority {integer}
            set status [disable|enable]
            set tag [none|dot1q|...]
            set vlan {integer}
        end
        config guest-voice-signaling
            Description: Guest Voice Signaling.
            set dscp {integer}
            set priority {integer}
            set status [disable|enable]
            set tag [none|dot1q|...]
            set vlan {integer}
        end
        config softphone
            Description: Softphone.
            set dscp {integer}
            set priority {integer}
            set status [disable|enable]
            set tag [none|dot1q|...]
            set vlan {integer}
        end
        config streaming-video
            Description: Streaming Video.
            set dscp {integer}
            set priority {integer}
            set status [disable|enable]
            set tag [none|dot1q|...]
            set vlan {integer}
        end
        config video-conferencing
            Description: Video Conferencing.
            set dscp {integer}
            set priority {integer}
            set status [disable|enable]
            set tag [none|dot1q|...]
            set vlan {integer}
        end
        config video-signaling
            Description: Video Signaling.
            set dscp {integer}
            set priority {integer}
            set status [disable|enable]
            set tag [none|dot1q|...]
            set vlan {integer}
        end
        config voice
            Description: Voice.
            set dscp {integer}
            set priority {integer}
            set status [disable|enable]
            set tag [none|dot1q|...]
            set vlan {integer}
        end
        config voice-signaling
            Description: Voice signaling.
            set dscp {integer}
            set priority {integer}
            set status [disable|enable]
            set tag [none|dot1q|...]
            set vlan {integer}
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
|           |                                   |            | 1023    |         |
+-----------+-----------------------------------+------------+---------+---------+
| name      | LLDP network policy name.         | string     | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 35      |         |
+-----------+-----------------------------------+------------+---------+---------+

