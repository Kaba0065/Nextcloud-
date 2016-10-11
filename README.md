# Nextcloud
[![Build Status](https://drone.nextcloud.com/api/badges/nextcloud/server/status.svg)](https://drone.nextcloud.com/nextcloud/server)
[![irc](https://img.shields.io/badge/IRC-%23nextcloud%20on%20freenode-orange.svg)](https://webchat.freenode.net/?channels=nextcloud)
[![irc](https://img.shields.io/badge/IRC-%23nextcloud--dev%20on%20freenode-blue.svg)](https://webchat.freenode.net/?channels=nextcloud-dev)

Please stay tuned while we get all the repositories up.

Meanwhile check out https://nextcloud.com and follow us on https://twitter.com/nextclouders

If you want to [contribute](https://nextcloud.com/contribute/), you are very welcome:

- on our IRC channels #nextcloud & #nextcloud-dev irc://#nextcloud-dev@freenode.net (on freenode) and
- our forum at https://help.nextcloud.com

Please read the [Code of Conduct](https://nextcloud.com/community/code-of-conduct/). This document offers some guidance to ensure Nextcloud participants can cooperate effectively in a positive and inspiring atmosphere, and to explain how together we can strengthen and support each other.

if you want to join the Github organization just let us know and we’ll add you! :)

*This is by the community, for the community. Everyone is welcome! :)*

![](https://github.com/nextcloud/screenshots/blob/master/files/filelist.png)

## Why is this so awesome?
* :file_folder: **Access your Data** You can store your files, contacts, calendars and more on a server of your choosing.
* :package: **Sync your Data** You keep your files, contacts, calendars and more synchronized amongst your devices.
* :arrows_counterclockwise: **Share your Data** You share your data with others, and give them access to your latest photo galleries, your calendar or anything else you want them to see.
* :rocket: **Expandable with dozens of Apps** ...like Calendar, Contacts, Mail or News.
* :cloud: **All Benefits of the Cloud** ...on your own Server.
* :lock: **Encryption** You can encrypt data in transit with secure https connections. You can enable the encryption app to encrypt data on storage for improved security and privacy.
* ...

## Installation
Read the Full [Installation Documentation](https://docs.nextcloud.com/server/10/admin_manual/installation/)

1. [Install yourself, use our appliances or find a provider](https://nextcloud.com/install/#instructions-server)
2. [Set permissions](https://docs.nextcloud.com/server/10/admin_manual/installation/installation_wizard.html#setting-strong-directory-permissions)
3. [Sync your data via Desktop or Mobile App](https://nextcloud.com/install/#install-clients)

## Contribution Guidelines

All contributions to this repository from June, 16 2016 on are considered to be
licensed under the AGPLv3 or any later version.

Nextcloud doesn't require a CLA (Contributor License Agreement).
The copyright belongs to all the individual contributors. Therefore we recommend
that every contributor adds following line to the header of a file, if they
changed it substantially:

```
@copyright Copyright (c) <year>, <your name> (<your email address>)
```

More information how to contribute: [https://nextcloud.com/contribute/](https://nextcloud.com/contribute/)

## Running master checkouts

Third-party components are handled as git submodules which have to be initialized first. So aside from the regular git checkout invoking `git submodule update --init` or a similar command is needed, for details see Git documentation.

Several apps by default included in regular releases like [firstrunwizard](https://github.com/nextcloud/firstrunwizard) or [gallery](https://github.com/nextcloud/gallery) are missing in `master` and have to be installed manually as required.

That aside Git checkouts can be handled the same as release archives.

Note they should never be used on production systems.

## Nextcloud VM
If you're not familiar with Linux, or simply just want to get up and running on a pre-configured system in no time - we have developed a VM that you can download. Just extract it and mount it in VMware or VirtualBox and you're all set.

Download the latest version of the [Nextcloud VM](https://github.com/nextcloud/vm/releases/)

## Support
Learn about the different ways you can get support for Nextcloud: [https://nextcloud.com/support/](https://nextcloud.com/support/)

## Get in touch
* :clipboard: [Forum](https://help.nextcloud.com)
* :hash: [IRC channel](https://webchat.freenode.net/?channels=nextcloud)
* :busts_in_silhouette: [Facebook](https://facebook.com/nextclouders)
* :hatching_chick: [Twitter](https://twitter.com/Nextclouders)
