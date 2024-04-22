Debouncing :

typing slow = 200ms
typing fast = 30ms

Performance: 
  iphone pro max = 14 letter * 1000 = 140000
  with debouncing = 3 API calls * 1000 = 3000

Debouncing with 200Sms
  - if difference between 2 key strokes is <200ms - Decling API call
  - 200ms make an API call