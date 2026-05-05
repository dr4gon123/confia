# config system saml

Global settings for SAML authentication.

## Syntax

```
config system saml
    Description: Global settings for SAML authentication.
    set binding-protocol [post|redirect]
    set cert {string}
    set default-login-page [normal|sso]
    set default-profile {string}
    set entity-id {string}
    set idp-cert {string}
    set idp-entity-id {string}
    set idp-single-logout-url {string}
    set idp-single-sign-on-url {string}
    set life {integer}
    set portal-url {string}
    set require-signed-resp-and-asrt [enable|disable]
    set role [identity-provider|service-provider]
    set server-address {string}
    config service-providers
        Description: Authorized service providers.
        edit <name>
            config assertion-attributes
                Description: Customized SAML attributes to send along with assertion.
                edit <name>
                    set type [username|email|...]
                next
            end
            set idp-entity-id {string}
            set idp-single-logout-url {string}
            set idp-single-sign-on-url {string}
            set prefix {string}
            set sp-binding-protocol [post|redirect]
            set sp-cert {string}
            set sp-entity-id {string}
            set sp-portal-url {string}
            set sp-single-logout-url {string}
            set sp-single-sign-on-url {string}
        next
    end
    set single-logout-url {string}
    set single-sign-on-url {string}
    set status [enable|disable]
    set tolerance {integer}
end
```

## Parameters

+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| Parameter                    | Description                       | Type                 | Size                 | Default              |
+==============================+===================================+======================+======================+======================+
| binding-protocol             | IdP Binding protocol.             | option               | \-                   | redirect             |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                              | +-------------+--------------------------------------------------------+                               |
|                              | | Option      | Description                                            |                               |
|                              | +=============+========================================================+                               |
|                              | | *post*      | HTTP POST binding.                                     |                               |
|                              | +-------------+--------------------------------------------------------+                               |
|                              | | *redirect*  | HTTP Redirect binding.                                 |                               |
|                              | +-------------+--------------------------------------------------------+                               |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| cert                         | Certificate to sign SAML          | string               | Maximum length: 35   |                      |
|                              | messages.                         |                      |                      |                      |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| default-login-page           | Choose default login page.        | option               | \-                   | normal               |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                              | +-------------+--------------------------------------------------------+                               |
|                              | | Option      | Description                                            |                               |
|                              | +=============+========================================================+                               |
|                              | | *normal*    | Use local login page as default.                       |                               |
|                              | +-------------+--------------------------------------------------------+                               |
|                              | | *sso*       | Use IdP\'s Single Sign-On page as default.             |                               |
|                              | +-------------+--------------------------------------------------------+                               |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| default-profile              | Default profile for new SSO       | string               | Maximum length: 35   |                      |
|                              | admin.                            |                      |                      |                      |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| entity-id                    | SP entity ID.                     | string               | Maximum length: 255  |                      |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| idp-cert                     | IDP certificate name.             | string               | Maximum length: 35   |                      |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| idp-entity-id                | IDP entity ID.                    | string               | Maximum length: 255  |                      |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| idp-single-logout-url        | IDP single logout URL.            | string               | Maximum length: 255  |                      |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| idp-single-sign-on-url       | IDP single sign-on URL.           | string               | Maximum length: 255  |                      |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| life                         | Length of the range of time when  | integer              | Minimum value: 0     | 30                   |
|                              | the assertion is valid (in        |                      | Maximum value:       |                      |
|                              | minutes).                         |                      | 4294967295           |                      |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| portal-url                   | SP portal URL. Read-only.         | string               | Maximum length: 255  |                      |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| require-signed-resp-and-asrt | Require both response and         | option               | \-                   | disable              |
|                              | assertion from IDP to be signed   |                      |                      |                      |
|                              | when FGT acts as SP (default =    |                      |                      |                      |
|                              | disable).                         |                      |                      |                      |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                              | +-------------+--------------------------------------------------------+                               |
|                              | | Option      | Description                                            |                               |
|                              | +=============+========================================================+                               |
|                              | | *enable*    | Both response and assertion must be signed and valid.  |                               |
|                              | +-------------+--------------------------------------------------------+                               |
|                              | | *disable*   | At least one of response or assertion must be signed   |                               |
|                              | |             | and valid.                                             |                               |
|                              | +-------------+--------------------------------------------------------+                               |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| role                         | SAML role.                        | option               | \-                   | service-provider     |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                              | +---------------------+--------------------------------------------------------+                       |
|                              | | Option              | Description                                            |                       |
|                              | +=====================+========================================================+                       |
|                              | | *identity-provider* | Identity Provider.                                     |                       |
|                              | +---------------------+--------------------------------------------------------+                       |
|                              | | *service-provider*  | Service Provider.                                      |                       |
|                              | +---------------------+--------------------------------------------------------+                       |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| server-address               | Server address.                   | string               | Maximum length: 63   |                      |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| single-logout-url            | SP single logout URL. Read-only.  | string               | Maximum length: 255  |                      |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| single-sign-on-url           | SP single sign-on URL. Read-only. | string               | Maximum length: 255  |                      |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| status                       | Enable/disable SAML               | option               | \-                   | disable              |
|                              | authentication (default =         |                      |                      |                      |
|                              | disable).                         |                      |                      |                      |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                              | +-------------+--------------------------------------------------------+                               |
|                              | | Option      | Description                                            |                               |
|                              | +=============+========================================================+                               |
|                              | | *enable*    | Enable SAML authentication.                            |                               |
|                              | +-------------+--------------------------------------------------------+                               |
|                              | | *disable*   | Disable SAML authentication.                           |                               |
|                              | +-------------+--------------------------------------------------------+                               |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| tolerance                    | Tolerance to the range of time    | integer              | Minimum value: 0     | 5                    |
|                              | when the assertion is valid (in   |                      | Maximum value:       |                      |
|                              | minutes).                         |                      | 4294967295           |                      |
+------------------------------+-----------------------------------+----------------------+----------------------+----------------------+

