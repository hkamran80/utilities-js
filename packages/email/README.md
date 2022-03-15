# [`@hkamran/utility-email`](https://www.npmjs.com/package/@hkamran/utility-email)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL3.0-green.svg)](../LICENSE.md) [![npm version](https://badge.fury.io/js/%40hkamran%2Futility-email.svg)](https://badge.fury.io/js/%40hkamran%2Futility-email.svg)

An easy way to send emails (powered by Nodemailer)

## Installation
```bash
$ npm i @hkamran/utility-email
```

## Usage
1. Create a transport client with `createClient` function, passing the server name
    - Make sure the environment variables `SMTP_HOSTNAME`, `SMTP_PORT`, `SMTP_USERNAME`, and `SMTP_PASSWORD` are set
2. Send an email with the `sendEmail` function
    - `transport`: The transport client created from `createClient`
    - `from`: The email you're sending from
    - `to`: The email you're sending to
    - `subject`: The email subject
    - `html`: The HTML version of the email
    - `plainText`: The plain-text version of the email
    - `attachments` (optional): A list of attachments
      - Must follow [Nodemailer's attachments syntax](https://nodemailer.com/message/attachments/)
    - `listUnsubscribe` (optional): A `List-Unsubscribe` header ([more info](https://mailtrap.io/blog/list-unsubscribe-header/))
