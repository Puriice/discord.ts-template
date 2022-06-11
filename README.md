# Discord.js Template

### Template for create a discord bot using discord.js

<br />

## About this template

<p style="text-indent:1rem">
This template is a starting point for a bot that uses the Discord.js library. It is designed to be as simple as possible, fast, and flexible. It is not intended to be a fully-fledged bot, but rather a starting point for you to build upon.
</p>

## Getting Start :

<ol>
	<li>[x] Use this template and clone to your working directory.</li>
	<li>[ ] Create <b>.env</b> file and add <b>CLIENT_ID</b>, <b>GUILD_ID</b> and <b>TOKEN</b> to your environment variables.</li>
	<li>[ ] Run <code>npm install</code> or <code>yarn install</code> to install dependencies.</li>
	<li>[ ] Start Hacking!</li>
</ol>
To run a project you can use scripts provided by the template.
<br />
<br />

### <b>Development :</b>

<pre style="margin:1rem"><code>npm run dev | yarn dev</code></pre>

### <b>Production :</b>

<pre style="margin:1rem"><code>npm run start | yarn start</code></pre>

## Script Tool:

<p style="text-indent:1rem">We have provided a script tool to help you can development even faster! Let we introduce it to you</p>

### Registing Commands

<p style="text-indent:1rem">The first step before we use the command is to register. But if you run it with <code>npm/yarn run start</code> or <code>npm/yarn run dev</code> it will register automatically. You don't need to worry about it.</p>

### <b>| npm</b>

<pre style="margin:1rem"><code>npm run deploy [development | production]</code></pre>

### <b>| yarn</b>

<pre style="margin:1rem"><code>yarn deploy [development | production]</code></pre>

<table style="margin:1rem">
<thead>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Optional</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>type</td>
    <td>development | production</td>
    <td>false</td>
    <td>Level of deployment.</td>
  </tr>
</tbody>
</table>

### Command Generator

<p style="text-indent:1rem">Are you tired of having to copy and paste old commands every time you create a new command? Are you tried of error when you creating a new command while using nodemon? <br />
we have a tool to help you!</p>
</p>

### <b>| npm</b>

<pre style="margin:1rem"><code>npm run gen commands [name?] [description?]</code></pre>

### <b>| yarn</b>

<pre style="margin:1rem"><code>yarn gen commands [name?] [description?]</code></pre>
<p style="text-indent:1rem"> 
</p>
<table style="margin:1rem">
<thead>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Optional</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>name</td>
    <td>String</td>
    <td>true</td>
    <td>The name of command.</td>
  </tr>
  <tr>
    <td>description</td>
    <td>String</td>
    <td>true</td>
    <td>The description of command.</td>
  </tr>
</tbody>
</table>

### Event Generator

<p style="text-indent:1rem">You might think we have a command constructor. But how to create a new event? Relax! We have tools to make your life easier~!</p>

### <b>| npm</b>

<pre style="margin:1rem"><code>npm run gen events [type] [name?] [once?]</code></pre>

### <b>| yarn</b>

<pre style="margin:1rem"><code>yarn gen events [type] [name?] [once?]</code></pre>

<table style="margin:1rem">
<thead>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Optional</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>type</td>
    <td>client / guild</td>
    <td>false</td>
    <td>Where is the event happen.</td>
  </tr>
  <tr>
	<td>name</td>
	<td>String</td>
	<td>true</td>
	<td>The name of event.</td>
  <tr>
    <td>once</td>
    <td>Boolean</td>
    <td>true</td>
    <td>If event should be trigger only once</td>
  </tr>
</tbody>
</table>

## Contract

<p style="text-indent:1rem"> Purinutt Amartayavis - <a href="mailto:work@purinutt.com">work@purinutt.com</a></p>
