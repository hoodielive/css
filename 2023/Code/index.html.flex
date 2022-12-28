<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <!-- Tailwind CSS -->
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
   <div class="bg-green-700 h-64 flex justify-center items-center">
    <h2 class="text-4xl text-green-100">Centered!</h2>
   </div> 

   <div class="bg-gray-300 p-10 flex justify-between">
        <div>logo</div>
        <div>nagivation</div>
   </div>
   <div class="bg-yellow-500 p-10 md:flex md:space-x-8 space-y-4 md:space-y-0">
        <div class="flex-shrink bg-white p-2">hello</div>
        <div class="flex-grow bg-white p-2">hello</div>
        <div class="flex-grow bg-white p-2">hello</div>
   </div>

   <div class="bg-teal-700 h-64">
        <div class="flex h-full items-stretch">
        <div class="bg-yellow-500 p-10">sidebar</div>
        <div class="bg-teal-500 p-10">content</div>
   </div>
</div>
</body>
</html>