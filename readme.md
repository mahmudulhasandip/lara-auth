<h2>Lara Auth</h2>

<p>Laravel authentication using phone and password with both web login and api login(using jwt auth and vue)</p>
<br>
<b>Run this commads serially</b>
<p>Create a database named "lara-auth" and configure it in .env file</p>
<ul>
    <li>composer update</li>
    <li>npm install</li>
    <li>php artisan key:generate</li>
    <li>php artisan jwt:secret</li>
    <li>php artisan migrate</li>
</ul>

<b>Now run both command in defferent terminal:</b>

<ul>
    <li>php artisan serve</li>
    <li>npm run watch</li>
</ul>

<p>Now goto the url: <a target='_blank' href="http://localhost:8000">http://localhost:8000</a></p>

<b>Register an user</b>
<p><a target='_blank' href="http://localhost:8000/register">http://localhost:8000/register</a></p>

<b>Web login</b>
<p><a target='_blank' href="http://localhost:8000/login">http://localhost:8000/login</a></p>

<b>Api Login</b>
<p><a target='_blank' href="http://localhost:8000/api/login">http://localhost:8000/api/login</a></p>
