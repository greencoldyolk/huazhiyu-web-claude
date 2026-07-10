# 08. Inquiry and upload flow

## Scope

The homepage supports:
- matter type selection
- contact information
- a free-text matter description of up to 500 Chinese characters
- optional Word/PDF upload
- submission
- confirmation or error

It is not an AI chatbot.

## Frontend form

Use strictly typed Reactive Forms.

Suggested model:

```ts
export interface InquiryFormValue {
  matterType: string;
  contactName: string;
  phone?: string;
  email?: string;
  description: string; // max 500 Chinese characters
  uploadedFiles: UploadedFileRef[];
}
```

At least one reliable contact method must be required; exact rule must be approved.


## Matter description field

- maximum length: 500 Chinese characters
- use a multiline textarea, not a chat-style composer
- preserve line breaks in the submitted payload
- show a live character counter
- exact required/optional status must be confirmed before production
- trim leading and trailing whitespace on submit, but do not collapse internal line breaks
- backend must enforce the same 500-character limit
- store as plain text; escape on output and never render as trusted HTML
- include the field in staff notifications and inquiry detail views

## Upload validation

Validate before upload:
- extension and MIME type
- file size
- file count
- duplicate file
- empty or corrupted filename
- user cancellation

Do not rely only on browser-supplied MIME type; backend must also validate metadata and storage callbacks.

## Preferred API flow

```text
POST /api/inquiries/uploads/presign
browser -> OSS/object storage
POST /api/inquiries
```

Presign response should include:
- upload URL or form fields
- object key
- expiration
- permitted content type
- maximum size

Final inquiry payload includes:
- form data
- object key
- original file name
- MIME type
- size
- optional checksum
- upload completion token if used

## Security and operations

To decide before production:
- maximum upload size
- allowed file count
- antivirus/malware scanning
- encryption and private ACL
- signed download access
- retention/deletion policy
- access logs
- rate limiting
- spam protection
- consent/privacy text
- staff notification route
- failure reconciliation when upload succeeds but inquiry save fails

## UX states

- idle
- validating
- requesting upload target
- uploading
- uploaded
- submitting inquiry
- success
- recoverable error
- terminal error

Preserve entered text when upload or submit fails.
