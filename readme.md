
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**? 
Ans : 

getElementById: এটা দিয়ে এইচটিএমএল এর ভিতরের আইডিকে জাভাস্ক্রিপ্টে সিলেক্ট করা যায় ।  এক নামের আইডি শুধু আকটাই হয়।

getElementsByClassName: এটা দিয়ে এইচটিএমএল এর ভিতরের ক্লাসকে জাভাস্ক্রিপ্টে সিলেক্ট করা যায় । এক নামের অনেক গুলো ক্নাস থাকতে পারে আর সব গুলোকে একবারে সিলেক্ট করা যায়।

querySelector: এটা দিয়ে এইচটিএমএল এর ভিতরে কোন পেরেন্ট ডিভ এর ভিতরের নির্দিষ্ট চাইল্ডকে জাভাস্ক্রিপ্টে সিলেক্ট করা যায় । 

querySelectorAll: এটা দিয়ে এইচটিএমএল এর ভিতরের অনেক গুলো ক্লাস ও আইডিকে একবারে এক সাথে জাভাস্ক্রিপ্টে সিলেক্ট করা যায় । 



2. How do you **create and insert a new element into the DOM**?
Ans : 

Step 1: create new Element in javaScript .
Step 2: Set InnerText or InnerHtml .
Step 3: AppendChild Whith Parent .



3. What is **Event Bubbling** and how does it work?
Ans: প্রতিটা টেগই পেরেন্ট থেকে চাইল্ড একটার সাথে আর একটা গাছের শেকড়ের মত যুক্ত থাকে । চাইল্ড


4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: 

Event Delegation এর মাধ্যমে সিলেক্ট করা টেগকে পাওয়া যায় ও সেটাকে ডিলিট সহ আরও অনেক কিছু পাওয়া যায়। পাশাপাশি তার পেরেন্টকেউ পাওয়া যায়।



5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:

preventDefault(): ইভেন্টের ডিফল্ট কাজ বন্ধ করে। যেমন: ফর্ম সাবমিট করলে পেইজ রিলোড বন্ধ করে।

stopPropagation(): ইভেন্টকে উপরের প্যারেন্ট এলিমেন্টে ছড়িয়ে (bubble) যেতে বাধা দেয়। 


# Coding My Way to Success 🎯
