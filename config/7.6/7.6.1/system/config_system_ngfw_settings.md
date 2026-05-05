# config system ngfw-settings

Configure IPS NGFW policy-mode VDOM settings.

## Syntax

```
config system ngfw-settings
    Description: Configure IPS NGFW policy-mode VDOM settings.
    set match-timeout {integer}
    set tcp-halfopen-match-timeout {integer}
    set tcp-match-timeout {integer}
end
```

## Parameters

+----------------------------+-----------------------------------+---------+---------+---------+
| Parameter                  | Description                       | Type    | Size    | Default |
+============================+===================================+=========+=========+=========+
| match-timeout              | Number of seconds to wait before  | integer | Minimum | 300     |
|                            | a security policy match for an    |         | value:  |         |
|                            | idle non-TCP session.             |         | 0       |         |
|                            |                                   |         | Maximum |         |
|                            |                                   |         | value:  |         |
|                            |                                   |         | 1800    |         |
+----------------------------+-----------------------------------+---------+---------+---------+
| tcp-halfopen-match-timeout | Number of seconds to wait before  | integer | Minimum | 8       |
|                            | a security policy match for a     |         | value:  |         |
|                            | session after one peer has sent   |         | 0       |         |
|                            | an open session packet but the    |         | Maximum |         |
|                            | other has not responded.          |         | value:  |         |
|                            |                                   |         | 300     |         |
+----------------------------+-----------------------------------+---------+---------+---------+
| tcp-match-timeout          | Number of seconds to wait before  | integer | Minimum | 300     |
|                            | a security policy match for an    |         | value:  |         |
|                            | idle TCP session.                 |         | 0       |         |
|                            |                                   |         | Maximum |         |
|                            |                                   |         | value:  |         |
|                            |                                   |         | 1800    |         |
+----------------------------+-----------------------------------+---------+---------+---------+

