function planSeating() {
  const guests = parseInt(prompt("How many guests will be attending?"));
  const tables = parseInt(prompt("How many tables are available?"));

  if (isNaN(guests) || isNaN(tables) || guests <= 0 || tables <= 0) {
    alert("Please enter valid positive numbers for guests and tables.");
    return;
  }

  const baseGuestsPerTable = Math.floor(guests / tables);
  const extraGuests = guests % tables;

  const tablesWithExtra = extraGuests;
  const tablesWithBase = tables - extraGuests;

  let message = `Your ${guests} guests will be seated as follows:\n`;
  if (tablesWithBase > 0) {
    message += `${tablesWithBase} table(s) of ${baseGuestsPerTable}`;
    message += tablesWithExtra > 0 ? ", and " : ".";
  }
  if (tablesWithExtra > 0) {
    message += `${tablesWithExtra} table(s) of ${baseGuestsPerTable + 1}.`;
  }

  alert(message);
}
