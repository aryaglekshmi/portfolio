"use client";
import React from "react";

function CodeSnippet() {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-primary-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-primary-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-5">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-200"></div>
        </div>
      </div>
      <code
        className="font-mono text-xs md:text-sm lg:text-base p-4 rounded"
        style={{ backgroundColor: "#1e2a38" }}
      >
        <div className="blink">
          <span className="mr-2 text-purple-500">const</span>
          <span className="mr-2 text-white">me</span>
          <span className="mr-2 text-purple-500">=</span>
          <span className="text-gray-400">{"{"}</span>
        </div>
        <div>
          <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
          <span className="text-gray-400">&apos;</span>
          <span className="text-yellow-300">Aryalekshmi G</span>
          <span className="text-gray-400">&apos;,</span>
        </div>
        <div>
          <span className="ml-4 lg:ml-8 mr-2 text-white">yearsOfExperience:</span>
          <span className="text-gray-400">&apos;</span>
          <span className="text-yellow-300">5+</span>
          <span className="text-gray-400">&apos;,</span>
        </div>
        <div className="ml-4 lg:ml-8 mr-2">
          <span className="text-white">frontendExpert:</span>
          <span className="text-gray-400">[&apos;</span>
          <span className="text-yellow-300">React</span>
          <span className="text-gray-400">&apos;, &apos;</span>
          <span className="text-yellow-300">Vue</span>
          <span className="text-gray-400">&apos;, &apos;</span>
          <span className="text-yellow-300">Angular</span>
          <span className="text-gray-400">&apos;],</span>
        </div>
        <div className="ml-4 lg:ml-8 mr-2">
          <span className="text-white">backendExploring:</span>
          <span className="text-gray-400">[&apos;</span>
          <span className="text-yellow-300">Node.js</span>
          <span className="text-gray-400">&apos;, &apos;</span>
          <span className="text-yellow-300">Express</span>
          <span className="text-gray-400">&apos;, &apos;</span>
          <span className="text-yellow-300">NestJS</span>
          <span className="text-gray-400">&apos;, &apos;</span>
          <span className="text-yellow-300">C#</span>
          <span className="text-gray-400">&apos;, &apos;</span>
          <span className="text-yellow-300">.NET</span>
          <span className="text-gray-400">&apos;, &apos;</span>
          <span className="text-yellow-300">JAVA</span>
          <span className="text-gray-400">&apos;],</span>
        </div>
        <div className="ml-4 lg:ml-8 mr-2">
          <span className="text-white">dbs:</span>
          <span className="text-gray-400">[&apos;</span>
          <span className="text-yellow-300">MongoDB</span>
          <span className="text-gray-400">&apos;, &apos;</span>
          <span className="text-yellow-300">MySQL</span>
          <span className="text-gray-400">&apos;, &apos;</span>
          <span className="text-yellow-300">PostgreSQL</span>
          <span className="text-gray-400">&apos;],</span>
        </div>
        <div className="ml-4 lg:ml-8 mr-2">
          <span className="text-white">toolbox:</span>
          <span className="text-gray-400">[&apos;</span>
          <span className="text-yellow-300">Docker</span>
          <span className="text-gray-400">&apos;, &apos;</span>
          <span className="text-yellow-300">Git</span>
          <span className="text-gray-400">&apos;],</span>
        </div>
        <div>
          <span className="ml-4 lg:ml-8 mr-2 text-white">passionForCode:</span>
          <span className="text-green-400">true</span>
          <span className="text-gray-400">,</span>
        </div>
        <div>
          <span className="ml-4 lg:ml-8 mr-2 text-white">RapidAdopter:</span>
          <span className="text-green-400">true</span>
          <span className="text-gray-400">,</span>
        </div>
        <div>
          <span className="ml-4 lg:ml-8 mr-2 text-white">fastLearner:</span>
          <span className="text-green-400">true</span>
          <span className="text-gray-400">,</span>
        </div>
        <div>
          <span className="ml-4 lg:ml-8 mr-2 text-white">skillSharpener:</span>
          <span className="text-green-400">true</span>
          <span className="text-gray-400">,</span>
        </div>
        <div>
          <span className="ml-4 lg:ml-8 mr-2 text-teal-400">welcome:</span>
          <span className="text-green-400">function</span>
          <span className="text-gray-400">{`() {`}</span>
        </div>
        <div>
          <span className="ml-4 lg:ml-8 mr-2 text-teal-400"></span>
          <span className="text-white ml-10 lg:ml-15">console.log(&quot;Hello Arya&apos;s World&quot;);</span>
        </div>
        <div>
          <span className="ml-4 lg:ml-8 text-gray-400">{`},`}</span>
        </div>
        <div>
          <span className="ml-4 lg:ml-8 mr-2 text-teal-400">hireable:</span>
          <span className="text-green-400">function</span>
          <span className="text-gray-400">{`() {`}</span>
        </div>
        <div>
          <span className="ml-8 lg:ml-16 mr-2 text-green-400">return</span>
          <span className="text-gray-400">{`(`}</span>
        </div>
        <div>
          <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
          <span className="mr-2 text-white">passionForCode</span>
          <span className="text-yellow-300">&amp;&amp;</span>
        </div>
        <div>
          <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
          <span className="mr-2 text-white">frontendExpert</span>
          <span className="text-yellow-300">&amp;&amp;</span>
        </div>
        <div>
          <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
          <span className="mr-2 text-white">backendExploring.length</span>
          <span className="mr-2 text-yellow-300">&gt;=</span>
          <span className="text-green-400">3</span>
        </div>
        <div>
          <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
          <span className="mr-2 text-white">yearsOfExperience</span>
          <span className="text-yellow-300">&gt;</span>
          <span className="text-green-400">4</span>
        </div>
        <div>
          <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
        </div>
        <div>
          <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
        </div>
        <div>
          <span className="text-gray-400">{`};`}</span>
        </div>
      </code>
    </div>
  );
}

export default CodeSnippet;
