Navigator Twin v3.1.3 — Pulse Stabilization and Mobile Home Polish

Deploy these files to the root of the GitHub Pages repository:

- index.html
- .nojekyll
- README_PATCH_NOTES.txt

What changed from v3.1.2:

1. Home Dashboard Daily Pulse card
   - Adds a visible "Today's Coherence Pulse" card on Home.
   - Shows whether today's Pulse is complete.
   - Shows latest average, lowest signal, recent trend, and ABCD thought.
   - Adds buttons for Open Pulse, Ask Twin About Today, and Small Stabilizing Move.

2. Pulse mobile polish
   - Larger mobile-friendly Pulse controls.
   - Full-width Pulse action buttons on narrow screens.
   - Clear privacy and safety language.

3. Pulse save flow
   - Replaces the disruptive save alert with an in-page confirmation panel.
   - After saving, offers Ask Twin About Today, Create Small Stabilizing Move, or Return Home.

4. Pulse history clarity
   - Shows the most recent five Pulse readings by default.
   - Adds Show Full History / Show Recent 5 toggle.
   - Adds Edit and Delete controls for saved Pulse readings.

5. Safety posture
   - Clarifies that Pulse is a personal coherence reflection log, not a medical or psychological diagnostic tool.

Suggested tests:

1. Load app and confirm Home opens without errors.
2. Confirm Today's Coherence Pulse card appears on Home.
3. Open Pulse and save a seven-signal reading.
4. Confirm in-page confirmation appears instead of a JavaScript error.
5. Return Home and confirm Pulse card updates.
6. Save six or more Pulse readings and confirm Recent 5 / Full History toggle appears.
7. Edit a Pulse reading, change one score, update it, and confirm the entry marks edited.
8. Delete a Pulse reading and confirm Home and Pulse History update.
9. Confirm JSON export/import still includes Daily Pulse readings.
10. Confirm Twin, Memory, Field Map, Moves, Coaches, and Help still open normally.
