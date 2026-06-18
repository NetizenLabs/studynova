import { c as createComponent } from './astro-component_CHcEx1uS.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_Bx6xXgL3.mjs';
import { $ as $$Layout } from './Layout_BqvE9BNM.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$AttendanceCalculator = createComponent(($$result, $$props, $$slots) => {
  const title = "Free Attendance Calculator for University Students";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "data-astro-cid-xbgalpdd": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="max-w-4xl mx-auto py-12" data-astro-cid-xbgalpdd> <div class="text-center mb-12" data-astro-cid-xbgalpdd> <h1 class="text-4xl md:text-5xl font-extrabold text-navy mb-4" data-astro-cid-xbgalpdd>Attendance Calculator</h1> <p class="text-xl text-gray-600" data-astro-cid-xbgalpdd>Track your attendance and find out exactly how many classes you can miss.</p> </div> <!-- StudyNova Attendance Calculator -->  <div class="nova-attendance" data-astro-cid-xbgalpdd> <h2 data-astro-cid-xbgalpdd>✦ Attendance Calculator</h2> <div class="subtitle" data-astro-cid-xbgalpdd>Track your attendance percentage and find out exactly how many classes you can miss while staying above the 75% requirement.</div> <div class="input-group" data-astro-cid-xbgalpdd> <label data-astro-cid-xbgalpdd>Total Classes Held</label> <input type="number" id="totalClasses" placeholder="e.g., 30" min="1" value="30" data-astro-cid-xbgalpdd> </div> <div class="input-group" data-astro-cid-xbgalpdd> <label data-astro-cid-xbgalpdd>Classes Attended</label> <input type="number" id="attendedClasses" placeholder="e.g., 22" min="0" value="22" data-astro-cid-xbgalpdd> </div> <button class="btn-primary" onclick="calculateAttendance()" data-astro-cid-xbgalpdd>Calculate Attendance</button> <div class="result-box" id="resultBox" data-astro-cid-xbgalpdd> <div class="stat-grid" data-astro-cid-xbgalpdd> <div class="stat-item" data-astro-cid-xbgalpdd> <span class="number" id="percentDisplay" data-astro-cid-xbgalpdd>0%</span> <span class="label" data-astro-cid-xbgalpdd>Attendance</span> </div> <div class="stat-item" data-astro-cid-xbgalpdd> <span class="number" id="statusDisplay" data-astro-cid-xbgalpdd>Safe</span> <span class="label" data-astro-cid-xbgalpdd>Status</span> </div> </div> <div id="statusBadgeContainer" style="text-align:center;" data-astro-cid-xbgalpdd></div> <div class="advice-box" id="adviceBox" data-astro-cid-xbgalpdd> <strong data-astro-cid-xbgalpdd>📌 Analysis:</strong> <span id="adviceText" data-astro-cid-xbgalpdd>Loading...</span> </div> <div style="margin-top:12px; font-size:0.8rem; color:#718096; text-align:center; border-top:1px solid #EDF2F7; padding-top:12px;" data-astro-cid-xbgalpdd> <span class="status-safe" style="padding:2px 10px; font-size:0.7rem;" data-astro-cid-xbgalpdd>✔ Safe</span> ≥ 75% &nbsp;|&nbsp;
<span class="status-risk" style="padding:2px 10px; font-size:0.7rem;" data-astro-cid-xbgalpdd>⚠ At Risk</span> 65% – 74% &nbsp;|&nbsp;
<span class="status-danger" style="padding:2px 10px; font-size:0.7rem;" data-astro-cid-xbgalpdd>✖ Below</span> &lt; 65%
</div> </div> </div> <script>
        function calculateAttendance() {
            const total = parseInt(document.getElementById('totalClasses').value);
            const attended = parseInt(document.getElementById('attendedClasses').value);

            // Validation
            if (isNaN(total) || total <= 0) {
                alert('Please enter a valid number for Total Classes (must be greater than 0).');
                return;
            }
            if (isNaN(attended) || attended < 0 || attended > total) {
                alert('Please enter a valid number for Attended Classes (0 to Total).');
                return;
            }

            const percent = (attended / total) * 100;
            const roundedPercent = percent.toFixed(2);

            // --- Analysis Logic ---
            // 1. Status
            let statusText, statusClass;
            if (percent >= 75) {
                statusText = '✅ Safe';
                statusClass = 'status-safe';
            } else if (percent >= 65) {
                statusText = '⚠️ At Risk';
                statusClass = 'status-risk';
            } else {
                statusText = '❌ Below 75%';
                statusClass = 'status-danger';
            }

            // 2. Advice: How many more can you miss to stay at 75%?
            // Formula: Missed = (Attended / 0.75) - Total. If positive, you can miss that many.
            const maxTotalFor75 = attended / 0.75;
            let canMiss = Math.floor(maxTotalFor75 - total);

            let advice = '';
            if (canMiss > 0) {
                advice = \`You can miss up to <strong>\${canMiss}</strong> more class(es) and still stay above the 75% threshold (assuming no new classes are added).\`;
            } else if (canMiss === 0) {
                advice = \`You are exactly at the minimum threshold. Do not miss any more classes.\`;
            } else {
                // Need to attend more classes to reach 75%
                const needed = Math.ceil(4 * (0.75 * total - attended));
                if (needed > 0) {
                    advice = \`You are below 75%. You need to attend the next <strong>\${needed}</strong> class(es) without missing any to reach the 75% threshold.\`;
                } else {
                    advice = \`You are very close. Ensure you don't miss any upcoming classes.\`;
                }
            }

            // Display Results
            document.getElementById('percentDisplay').textContent = roundedPercent + '%';
            document.getElementById('statusDisplay').textContent = statusText.replace(/[✅⚠️❌]/g, '').trim();

            const badgeContainer = document.getElementById('statusBadgeContainer');
            badgeContainer.innerHTML = \`<span class="status-badge \${statusClass}">\${statusText}</span>\`;

            document.getElementById('adviceText').innerHTML = advice;

            // Show the box
            document.getElementById('resultBox').classList.add('show');
        }

        // Run on load with default values (30, 22) to show immediate result
        window.addEventListener('DOMContentLoaded', function() {
            calculateAttendance();
        });
    <\/script> </div> `], [" ", `<div class="max-w-4xl mx-auto py-12" data-astro-cid-xbgalpdd> <div class="text-center mb-12" data-astro-cid-xbgalpdd> <h1 class="text-4xl md:text-5xl font-extrabold text-navy mb-4" data-astro-cid-xbgalpdd>Attendance Calculator</h1> <p class="text-xl text-gray-600" data-astro-cid-xbgalpdd>Track your attendance and find out exactly how many classes you can miss.</p> </div> <!-- StudyNova Attendance Calculator -->  <div class="nova-attendance" data-astro-cid-xbgalpdd> <h2 data-astro-cid-xbgalpdd>✦ Attendance Calculator</h2> <div class="subtitle" data-astro-cid-xbgalpdd>Track your attendance percentage and find out exactly how many classes you can miss while staying above the 75% requirement.</div> <div class="input-group" data-astro-cid-xbgalpdd> <label data-astro-cid-xbgalpdd>Total Classes Held</label> <input type="number" id="totalClasses" placeholder="e.g., 30" min="1" value="30" data-astro-cid-xbgalpdd> </div> <div class="input-group" data-astro-cid-xbgalpdd> <label data-astro-cid-xbgalpdd>Classes Attended</label> <input type="number" id="attendedClasses" placeholder="e.g., 22" min="0" value="22" data-astro-cid-xbgalpdd> </div> <button class="btn-primary" onclick="calculateAttendance()" data-astro-cid-xbgalpdd>Calculate Attendance</button> <div class="result-box" id="resultBox" data-astro-cid-xbgalpdd> <div class="stat-grid" data-astro-cid-xbgalpdd> <div class="stat-item" data-astro-cid-xbgalpdd> <span class="number" id="percentDisplay" data-astro-cid-xbgalpdd>0%</span> <span class="label" data-astro-cid-xbgalpdd>Attendance</span> </div> <div class="stat-item" data-astro-cid-xbgalpdd> <span class="number" id="statusDisplay" data-astro-cid-xbgalpdd>Safe</span> <span class="label" data-astro-cid-xbgalpdd>Status</span> </div> </div> <div id="statusBadgeContainer" style="text-align:center;" data-astro-cid-xbgalpdd></div> <div class="advice-box" id="adviceBox" data-astro-cid-xbgalpdd> <strong data-astro-cid-xbgalpdd>📌 Analysis:</strong> <span id="adviceText" data-astro-cid-xbgalpdd>Loading...</span> </div> <div style="margin-top:12px; font-size:0.8rem; color:#718096; text-align:center; border-top:1px solid #EDF2F7; padding-top:12px;" data-astro-cid-xbgalpdd> <span class="status-safe" style="padding:2px 10px; font-size:0.7rem;" data-astro-cid-xbgalpdd>✔ Safe</span> ≥ 75% &nbsp;|&nbsp;
<span class="status-risk" style="padding:2px 10px; font-size:0.7rem;" data-astro-cid-xbgalpdd>⚠ At Risk</span> 65% – 74% &nbsp;|&nbsp;
<span class="status-danger" style="padding:2px 10px; font-size:0.7rem;" data-astro-cid-xbgalpdd>✖ Below</span> &lt; 65%
</div> </div> </div> <script>
        function calculateAttendance() {
            const total = parseInt(document.getElementById('totalClasses').value);
            const attended = parseInt(document.getElementById('attendedClasses').value);

            // Validation
            if (isNaN(total) || total <= 0) {
                alert('Please enter a valid number for Total Classes (must be greater than 0).');
                return;
            }
            if (isNaN(attended) || attended < 0 || attended > total) {
                alert('Please enter a valid number for Attended Classes (0 to Total).');
                return;
            }

            const percent = (attended / total) * 100;
            const roundedPercent = percent.toFixed(2);

            // --- Analysis Logic ---
            // 1. Status
            let statusText, statusClass;
            if (percent >= 75) {
                statusText = '✅ Safe';
                statusClass = 'status-safe';
            } else if (percent >= 65) {
                statusText = '⚠️ At Risk';
                statusClass = 'status-risk';
            } else {
                statusText = '❌ Below 75%';
                statusClass = 'status-danger';
            }

            // 2. Advice: How many more can you miss to stay at 75%?
            // Formula: Missed = (Attended / 0.75) - Total. If positive, you can miss that many.
            const maxTotalFor75 = attended / 0.75;
            let canMiss = Math.floor(maxTotalFor75 - total);

            let advice = '';
            if (canMiss > 0) {
                advice = \\\`You can miss up to <strong>\\\${canMiss}</strong> more class(es) and still stay above the 75% threshold (assuming no new classes are added).\\\`;
            } else if (canMiss === 0) {
                advice = \\\`You are exactly at the minimum threshold. Do not miss any more classes.\\\`;
            } else {
                // Need to attend more classes to reach 75%
                const needed = Math.ceil(4 * (0.75 * total - attended));
                if (needed > 0) {
                    advice = \\\`You are below 75%. You need to attend the next <strong>\\\${needed}</strong> class(es) without missing any to reach the 75% threshold.\\\`;
                } else {
                    advice = \\\`You are very close. Ensure you don't miss any upcoming classes.\\\`;
                }
            }

            // Display Results
            document.getElementById('percentDisplay').textContent = roundedPercent + '%';
            document.getElementById('statusDisplay').textContent = statusText.replace(/[✅⚠️❌]/g, '').trim();

            const badgeContainer = document.getElementById('statusBadgeContainer');
            badgeContainer.innerHTML = \\\`<span class="status-badge \\\${statusClass}">\\\${statusText}</span>\\\`;

            document.getElementById('adviceText').innerHTML = advice;

            // Show the box
            document.getElementById('resultBox').classList.add('show');
        }

        // Run on load with default values (30, 22) to show immediate result
        window.addEventListener('DOMContentLoaded', function() {
            calculateAttendance();
        });
    <\/script> </div> `])), maybeRenderHead()) })}`;
}, "D:/Github/studynova/src/pages/tools/attendance-calculator.astro", void 0);

const $$file = "D:/Github/studynova/src/pages/tools/attendance-calculator.astro";
const $$url = "/tools/attendance-calculator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AttendanceCalculator,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
