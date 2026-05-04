# config switch-controller custom-command

Configure the FortiGate switch controller to send custom commands to managed FortiSwitch devices.

## Syntax

```
config switch-controller custom-command
    Description: Configure the FortiGate switch controller to send custom commands to managed FortiSwitch devices.
    edit <command-name>
        set command {var-string}
        set description {string}
    next
end
```

## Parameters

+--------------+-----------------------------------+------------+---------+---------+
| Parameter    | Description                       | Type       | Size    | Default |
+==============+===================================+============+=========+=========+
| command      | String of commands to send to     | var-string | Maximum |         |
|              | FortiSwitch devices (For example  |            | length: |         |
|              | (%0a = return key): config switch |            | 4095    |         |
|              | trunk %0a edit myTrunk %0a set    |            |         |         |
|              | members port1 port2 %0a end %0a). |            |         |         |
+--------------+-----------------------------------+------------+---------+---------+
| command-name | Command name called by the        | string     | Maximum |         |
|              | FortiGate switch controller in    |            | length: |         |
|              | the execute command.              |            | 35      |         |
+--------------+-----------------------------------+------------+---------+---------+
| description  | Description.                      | string     | Maximum |         |
|              |                                   |            | length: |         |
|              |                                   |            | 35      |         |
+--------------+-----------------------------------+------------+---------+---------+

