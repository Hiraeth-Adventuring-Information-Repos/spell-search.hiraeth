// Filter vocabulary refreshed from the verified spell tags on 2026-10-26.
// Every spell now has an explicit Ritual Yes/No tag; its presence excludes
// creature appendices, navigation pages, and rename notices from spell searches.
const BASE_QUERY = "{type:page} {in_book:8} [Ritual]";

const filterGroups = [
  {
    "title": "Spell Level",
    "tag": "Spell Level",
    "open": true,
    "selection": "multi",
    "values": [
      "Cantrip",
      "1st Level",
      "2nd Level",
      "3rd Level",
      "4th Level",
      "5th Level",
      "6th Level",
      "7th Level",
      "8th Level",
      "9th Level"
    ]
  },
  {
    "title": "Spell School",
    "tag": "Spell School",
    "open": true,
    "selection": "multi",
    "values": [
      "Abjuration",
      "Conjuration",
      "Divination",
      "Enchantment",
      "Evocation",
      "Illusion",
      "Liminal",
      "Necromancy",
      "Transmutation"
    ]
  },
  {
    "title": "Class / Spell List",
    "tag": "Spell List",
    "open": true,
    "selection": "multi",
    "values": [
      "Antipaladin",
      "Artificer",
      "Bard",
      "Chronurgy",
      "Cleric",
      "Druid",
      "Dunamancy",
      "Fighter",
      "Graviturgy",
      "Hunt-Warden",
      "Illrigger",
      "Occultist",
      "Paladin",
      "Profane Word",
      "Ranger",
      "Ritual",
      "Rogue",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ]
  },
  {
    "title": "Ritual",
    "tag": "Ritual",
    "open": false,
    "selection": "multi",
    "values": [
      "Yes",
      "No"
    ]
  },
  {
    "title": "Concentration",
    "tag": "Concentration",
    "open": false,
    "selection": "multi",
    "values": [
      "Yes",
      "No"
    ]
  },
  {
    "title": "Higher-Level Casting",
    "tag": "Higher-Level Casting",
    "open": false,
    "selection": "multi",
    "values": [
      "Yes",
      "No"
    ]
  },
  {
    "title": "Source",
    "tag": "Source",
    "open": false,
    "selection": "multi",
    "values": [
      "Acquisitions Incorporated",
      "AD&D",
      "Baldur's Gate III",
      "Basic Rules",
      "Book of the Profane Word",
      "Campaign 4",
      "Chronicles of Eberron",
      "Critical Role",
      "D&D 3.5",
      "D&D Beyond",
      "Deep Magic",
      "Deep Magic 5E Elven High Magic",
      "Dungeons of Drakkenheim",
      "Eberron: Forge of the Artificer",
      "Elemental Evil",
      "Elemental Evil Player's Companion",
      "Explorer's Guide to Wildemount",
      "Exploring Eberron (2024)",
      "Faiths of the Forgotten Realms",
      "Fizban's Treasury of Dragons",
      "Forgotten Realms - Heroes of Faerun",
      "Grim Hollow: Player Pack",
      "Grim Hollow: Player's Guide",
      "Guide to Drakkenheim",
      "Guildmasters’ Guide to Ravnica",
      "Heliana’s Guide to Monster Hunting: Part 1",
      "Heliana’s Guide to Monster Hunting: Part 2",
      "Hiraeth",
      "Hiraeth Homebrew",
      "Humblewood Campaign Setting",
      "Icewind Dale: Rime of the Frostmaiden",
      "Jax SN Johnson",
      "Kobold Press",
      "Lairs of Etharis",
      "Lost Laboratory of Kwalish",
      "Lunch Break Heroes",
      "MCDM",
      "Mystic Arts",
      "Nardo D&D",
      "Obojima: Tales from the Tall Grass",
      "Pirate Campaign Compendium",
      "Planescape: Adventures in the Multiverse",
      "Player's Handbook",
      "Player's Handbook (2024)",
      "Players Handbook 2014",
      "Players Handbook 2024",
      "Player’s Handbook",
      "schadenfreudestudios",
      "Scott Reichelt",
      "Spelljammer: Adventures in Space",
      "SRD 5.2.1",
      "Strixhaven: A Curriculum of Chaos",
      "Sword Coast Adventurer's Guide",
      "Tales from the Shadows",
      "Tal’Dorei Campaign Setting Reborn",
      "Tasha's Cauldron of Everything",
      "Tasha’s Cauldron of Everything",
      "The Book of Many Things",
      "The Crooked Moon",
      "The Crooked Moon Part One: Player Options & Campaign Setting",
      "The Illrigger Revised",
      "Tome of Heroes",
      "Unknown",
      "Valda’s Spire of Secrets: Player Pack",
      "Xanathar's Guide to Everything"
    ]
  },
  {
    "title": "Role",
    "tag": "role",
    "open": true,
    "selection": "multi",
    "values": [
      "anti-magic",
      "buff",
      "communication",
      "control",
      "creation",
      "damage",
      "debuff",
      "detection",
      "healing",
      "movement",
      "protection",
      "restoration",
      "social",
      "stealth",
      "summoning",
      "travel",
      "utility"
    ]
  },
  {
    "title": "Damage Type",
    "tag": "damage-type",
    "open": true,
    "selection": "multi",
    "values": [
      "acid",
      "bludgeoning",
      "cold",
      "fire",
      "force",
      "lightning",
      "necrotic",
      "piercing",
      "poison",
      "psychic",
      "radiant",
      "slashing",
      "thunder",
      "variable"
    ]
  },
  {
    "title": "Condition",
    "tag": "condition",
    "open": false,
    "selection": "multi",
    "values": [
      "blinded",
      "charmed",
      "curse",
      "deafened",
      "disease",
      "exhaustion",
      "frightened",
      "grappled",
      "incapacitated",
      "invisible",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "stunned",
      "unconscious"
    ]
  },
  {
    "title": "Save",
    "tag": "save",
    "open": false,
    "selection": "multi",
    "values": [
      "charisma",
      "constitution",
      "dexterity",
      "intelligence",
      "none",
      "strength",
      "wisdom"
    ]
  },
  {
    "title": "Attack",
    "tag": "attack",
    "open": false,
    "selection": "multi",
    "values": [
      "melee spell",
      "none",
      "ranged spell"
    ]
  },
  {
    "title": "Casting Time",
    "tag": "Casting Time",
    "open": false,
    "selection": "multi",
    "values": [
      {
        "label": "1 action",
        "value": "1 action%",
        "operator": "like"
      },
      {
        "label": "1 bonus action",
        "value": "%bonus action%",
        "operator": "like"
      },
      {
        "label": "1 hour",
        "value": "1 hour%",
        "operator": "like"
      },
      {
        "label": "1 minute",
        "value": "1 minute%",
        "operator": "like"
      },
      {
        "label": "1 reaction",
        "value": "%reaction%",
        "operator": "like"
      },
      {
        "label": "1 round",
        "value": "1 round%",
        "operator": "like"
      },
      "1 turn",
      {
        "label": "4 hours",
        "value": "4 hours%",
        "operator": "like"
      },
      {
        "label": "5 minutes",
        "value": "5 minutes%",
        "operator": "like"
      },
      {
        "label": "7 hours",
        "value": "7 hours%",
        "operator": "like"
      },
      {
        "label": "8 hours",
        "value": "8 hours%",
        "operator": "like"
      },
      {
        "label": "9 hours",
        "value": "9 hours%",
        "operator": "like"
      },
      {
        "label": "10 minutes",
        "value": "10 minutes%",
        "operator": "like"
      },
      {
        "label": "12 hours",
        "value": "12 hours%",
        "operator": "like"
      },
      {
        "label": "15 minutes",
        "value": "15 minutes%",
        "operator": "like"
      },
      {
        "label": "24 hours",
        "value": "24 hours%",
        "operator": "like"
      },
      "action",
      "action or Ritual",
      "bonus action",
      "reaction, which you take when you see a creature within 60 feet of you summon another creature",
      "Special, action (Overgrowth) or 8 hours (Enrichment)"
    ]
  },
  {
    "title": "Duration",
    "tag": "Duration",
    "open": false,
    "selection": "multi",
    "values": [
      "1 day",
      "1 day per caster’s spellcasting level",
      "1 hour",
      "1 hour (see below)",
      "1 hour or until triggered",
      "1 minute",
      "1 minute or 1 hour",
      "1 minute, or until expended",
      "1 minute, until expended",
      "1 round",
      "1 week",
      "1 year",
      "1d10 hours",
      "2 hours",
      "2-12 hours",
      "3 days",
      "3 hours",
      "3 rounds",
      "4 rounds",
      "5 days",
      "5 minutes",
      "5 rounds",
      "6 hours",
      "6 rounds",
      "7 days",
      "8 hours",
      "8 hours or until discharged",
      "10 days",
      "10 hours",
      "10 minutes",
      "10 minutes or 1 hour if bound",
      "12 hours",
      "24 hours",
      "24 hours (see text)",
      "30 days",
      "48 hours",
      "but see description",
      "Instantaneous",
      "Instantaneous or special",
      "Instantaneous, 1 round, 1 minute",
      "Instantious",
      "Permanent",
      "Permanent until discharged",
      "Permanent; one generation",
      "See below",
      "Special",
      "Special (see below)",
      "Special (see spell description)",
      "Until completed task or 7 days",
      "Until cured or dispelled",
      "Until destroyed",
      "Until dispelled",
      "Until dispelled or destroyed",
      "Until dispelled or triggered",
      "Until dispelled or used",
      "Up to 1 hour",
      "Up to 1 minute",
      "Up to 1 minute, Concentration",
      "Up to 1 month",
      "Up to 1 round",
      "Up to 2 hours",
      "Up to 2 rounds",
      "Up to 3 rounds",
      "Up to 4 rounds",
      "Up to 5 minutes",
      "Up to 5 rounds",
      "Up to 8 hours",
      "Up to 10 minutes",
      "Up to 10 rounds",
      "Up to a minute",
      "Varies (see below)"
    ]
  },
  {
    "title": "Range",
    "tag": "Range",
    "open": false,
    "selection": "multi",
    "values": [
      {
        "label": "1 mile",
        "value": "1 mile%",
        "operator": "like"
      },
      {
        "label": "1,000 feet",
        "value": "1,000 feet%",
        "operator": "like"
      },
      {
        "label": "5 feet",
        "value": "5 feet%",
        "operator": "like"
      },
      {
        "label": "10 feet",
        "value": "10 feet%",
        "operator": "like"
      },
      {
        "label": "10 miles",
        "value": "10 miles%",
        "operator": "like"
      },
      {
        "label": "15 feet",
        "value": "15 feet%",
        "operator": "like"
      },
      {
        "label": "20 feet",
        "value": "20 feet%",
        "operator": "like"
      },
      {
        "label": "25 feet",
        "value": "25 feet%",
        "operator": "like"
      },
      {
        "label": "30 feet",
        "value": "30 feet%",
        "operator": "like"
      },
      {
        "label": "40 feet",
        "value": "40 feet%",
        "operator": "like"
      },
      {
        "label": "50 feet",
        "value": "50 feet%",
        "operator": "like"
      },
      {
        "label": "50 miles",
        "value": "50 miles%",
        "operator": "like"
      },
      {
        "label": "60 feet",
        "value": "60 feet%",
        "operator": "like"
      },
      {
        "label": "80 feet",
        "value": "80 feet%",
        "operator": "like"
      },
      {
        "label": "90 feet",
        "value": "90 feet%",
        "operator": "like"
      },
      {
        "label": "100 feet",
        "value": "100 feet%",
        "operator": "like"
      },
      {
        "label": "120 feet",
        "value": "120 feet%",
        "operator": "like"
      },
      {
        "label": "150 feet",
        "value": "150 feet%",
        "operator": "like"
      },
      {
        "label": "180 feet",
        "value": "180 feet%",
        "operator": "like"
      },
      {
        "label": "200 feet",
        "value": "200 feet%",
        "operator": "like"
      },
      {
        "label": "300 feet",
        "value": "300 feet%",
        "operator": "like"
      },
      {
        "label": "400 feet",
        "value": "400 feet%",
        "operator": "like"
      },
      {
        "label": "500 feet",
        "value": "500 feet%",
        "operator": "like"
      },
      {
        "label": "500 miles",
        "value": "500 miles%",
        "operator": "like"
      },
      {
        "label": "1000 feet",
        "value": "1000 feet%",
        "operator": "like"
      },
      "see below",
      "see text",
      {
        "label": "Self",
        "value": "Self%",
        "operator": "like"
      },
      "Sight",
      "Sight (1 mile)",
      {
        "label": "Touch",
        "value": "Touch%",
        "operator": "like"
      },
      "Unlimited"
    ]
  },
  {
    "title": "Area",
    "tag": "area",
    "open": false,
    "selection": "multi",
    "values": [
      "cone",
      "cube",
      "cylinder",
      "emanation",
      "line",
      "multiple targets",
      "radius",
      "self",
      "single target",
      "sphere",
      "square",
      "wall"
    ]
  },
  {
    "title": "Components",
    "tag": "Components",
    "open": false,
    "selection": "multi",
    "values": [
      "Verbal",
      "Somatic",
      "Material"
    ]
  },
  {
    "title": "Mechanic",
    "tag": "mechanic",
    "open": false,
    "selection": "multi",
    "values": [
      "banishment",
      "difficult-terrain",
      "dunamancy",
      "forced-movement",
      "friendly-fire",
      "resurrection",
      "shapechanging",
      "summoning",
      "teleportation"
    ]
  }
];

const quickPresets = [
  {
    "label": "Cantrips",
    "tags": [
      [
        "Spell Level",
        "Cantrip"
      ]
    ]
  },
  {
    "label": "3rd-level wizard",
    "tags": [
      [
        "Spell Level",
        "3rd Level"
      ],
      [
        "Spell List",
        "Wizard"
      ]
    ]
  },
  {
    "label": "Hiraeth spells",
    "tags": [
      [
        "Source",
        "Hiraeth"
      ]
    ]
  },
  {
    "label": "Fire damage",
    "tags": [
      [
        "role",
        "damage"
      ],
      [
        "damage-type",
        "fire"
      ]
    ]
  },
  {
    "label": "Healing",
    "tags": [
      [
        "role",
        "healing"
      ]
    ]
  },
  {
    "label": "Control",
    "tags": [
      [
        "role",
        "control"
      ]
    ]
  },
  {
    "label": "Rituals",
    "tags": [
      [
        "Ritual",
        "Yes"
      ]
    ]
  },
  {
    "label": "Concentration",
    "tags": [
      [
        "Concentration",
        "Yes"
      ]
    ]
  },
  {
    "label": "Teleportation",
    "tags": [
      [
        "mechanic",
        "teleportation"
      ]
    ]
  },
  {
    "label": "Summoning",
    "tags": [
      [
        "role",
        "summoning"
      ]
    ]
  },
  {
    "label": "Higher-level casting",
    "tags": [
      [
        "Higher-Level Casting",
        "Yes"
      ]
    ]
  },
  {
    "label": "Bonus action",
    "tags": [
      [
        "Casting Time",
        "%bonus action%",
        "like"
      ]
    ]
  }
];

function optionDetails(option) {
  return typeof option === "string"
    ? { label: option, value: option, operator: "=" }
    : { operator: "=", ...option };
}

function tagTerm(tag, value, operator = "=") {
  if (operator !== "=" && operator !== "like") throw new Error("Unsupported tag operator");
  return operator === "like" ? `[${tag}like${value}]` : `[${tag}=${value}]`;
}

function parseTagTerm(term) {
  const like = term.match(/^\[([^=\]]+?)\s*like\s*([^\]]+)\]$/);
  if (like) return { tag: like[1].trim(), value: like[2].trim(), operator: "like" };
  const exact = term.match(/^\[([^=\]]+)=([^\]]+)\]$/);
  return exact ? { tag: exact[1].trim(), value: exact[2].trim(), operator: "=" } : null;
}

const form = document.querySelector("#spell-search-form");
const freeText = document.querySelector("#free-text");
const hiddenTerm = document.querySelector("#bookstack-term");
const resultCount = document.querySelector("#result-count");
const groupsRoot = document.querySelector("#filter-groups");
const quickRoot = document.querySelector("#quick-presets");
const clearButton = document.querySelector("[data-clear]");
const expandButton = document.querySelector("[data-expand-all]");
const collapseButton = document.querySelector("[data-collapse-all]");

function slug(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeText(value) {
  return String(value).trim().replace(/\s+/g, " ");
}

function selectedInputs() {
  return [...groupsRoot.querySelectorAll("input[data-tag]:checked")];
}

function buildTerm() {
  const words = normalizeText(freeText.value);
  const filters = selectedInputs().map((input) => tagTerm(input.dataset.tag, input.value, input.dataset.operator));
  return [BASE_QUERY, words, ...filters].filter(Boolean).join(" ");
}

function update() {
  const term = buildTerm();
  const selected = selectedInputs();
  for (const details of groupsRoot.querySelectorAll("details")) {
    const inputs = [...details.querySelectorAll("input[data-tag]:checked")];
    details.querySelector(".selection-summary").textContent = inputs.length
      ? inputs.map((input) => input.closest("label").querySelector(".option-text").textContent).join(", ")
      : "Any";
    details.classList.toggle("has-selection", inputs.length > 0);
    details.querySelector("[data-clear-group]").disabled = inputs.length === 0;
  }
  hiddenTerm.value = term;
  resultCount.textContent = `${selected.length} ${selected.length === 1 ? "filter" : "filters"}`;
}

function clearFilters() {
  freeText.value = "";
  for (const input of groupsRoot.querySelectorAll("input[data-tag]")) input.checked = false;
  update();
}

function setPreset(tags) {
  clearFilters();
  for (const [tag, value, operator = "="] of tags) {
    const input = groupsRoot.querySelector(`input[data-tag="${CSS.escape(tag)}"][value="${CSS.escape(value)}"][data-operator="${operator}"]`);
    if (input) {
      input.checked = true;
      input.closest("details").open = true;
    }
  }
  update();
}

function renderQuickPresets() {
  for (const preset of quickPresets) {
    const button = document.createElement("button");
    button.className = "quick-button";
    button.type = "button";
    button.ariaLabel = `Apply ${preset.label} preset (${preset.tags.length} ${preset.tags.length === 1 ? "filter" : "filters"})`;

    const label = document.createElement("strong");
    label.textContent = preset.label;

    const count = document.createElement("span");
    count.setAttribute("aria-hidden", "true");
    count.textContent = preset.tags.length;

    button.append(label, count);
    button.addEventListener("click", () => setPreset(preset.tags));
    quickRoot.append(button);
  }
}

function renderFilterGroups() {
  for (const group of filterGroups) {
    const details = document.createElement("details");
    details.open = false;

    const summary = document.createElement("summary");
    summary.id = `summary-${slug(group.tag)}`;
    const heading = document.createElement("span");
    heading.className = "summary-copy";
    const title = document.createElement("span");
    title.textContent = group.title;
    const selection = document.createElement("span");
    selection.className = "selection-summary";
    heading.append(title, selection);
    summary.append(heading);
    details.append(summary);
    details.addEventListener("toggle", syncExpandToggle);

    const body = document.createElement("div");
    body.className = "group-body";
    const toolbar = document.createElement("div");
    toolbar.className = "group-toolbar";
    const hint = document.createElement("span");
    hint.textContent = "Choose any";
    const reset = document.createElement("button");
    reset.type = "button";
    reset.className = "ghost-button small";
    reset.dataset.clearGroup = "";
    reset.textContent = "Reset";
    reset.ariaLabel = `Reset ${group.title}`;
    reset.addEventListener("click", () => {
      for (const input of details.querySelectorAll("input[data-tag]")) input.checked = false;
      update();
    });
    toolbar.append(hint, reset);
    body.append(toolbar);

    if (group.values.length > 15) {
      const search = document.createElement("input");
      search.className = "group-search";
      search.type = "search";
      search.placeholder = `Filter ${group.title}`;
      search.ariaLabel = `Filter ${group.title} options`;
      search.addEventListener("input", () => filterOptions(body, search.value));
      body.append(search);
    }

    const fieldset = document.createElement("fieldset");
    fieldset.className = "option-fieldset";

    const legend = document.createElement("legend");
    legend.className = "sr-only";
    legend.textContent = `${group.title} options`;
    fieldset.append(legend);

    group.values.forEach((rawOption, index) => {
      const { label: optionLabel, value, operator } = optionDetails(rawOption);
      const optionId = `option-${slug(group.tag)}-${index}-${slug(value)}`;
      const label = document.createElement("label");
      label.className = "option";
      label.dataset.optionText = `${group.title} ${group.tag} ${optionLabel}`.toLowerCase();

      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = optionId;
      input.id = optionId;
      input.value = value;
      input.dataset.tag = group.tag;
      input.dataset.operator = operator;

      const text = document.createElement("span");
      text.className = "option-text";
      text.textContent = optionLabel;


      label.append(input, text);
      fieldset.append(label);
    });

    body.append(fieldset);
    details.append(body);
    groupsRoot.append(details);
  }
}

function filterOptions(groupBody, value) {
  const needle = value.trim().toLowerCase();
  for (const option of groupBody.querySelectorAll(".option")) {
    option.classList.toggle("is-hidden", needle && !option.dataset.optionText.includes(needle));
  }
}

function restoreFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const term = params.get("term");
  if (!term) {
    const q = params.get("q");
    if (q) freeText.value = q;
    return;
  }

  let leftover = term.replace(/\{type:page\}|\{in_book:8\}|\[Ritual\]/g, "").trim();
  for (const match of term.matchAll(/\[[^\]]+\]/g)) {
    const parsed = parseTagTerm(match[0]);
    if (!parsed) continue;
    let { tag, value, operator } = parsed;
    const aliases = { component: "Components", action: "Casting Time" };
    tag = aliases[tag.toLowerCase()] || tag;
    if (tag.toLowerCase() === "spell level") {
      value = { "3rd-Level": "3rd Level", "6th": "6th Level" }[value] || value;
    }
    if (parsed.tag.toLowerCase() === "action") {
      value = { action: "1 action%", "bonus action": "%bonus action%", reaction: "%reaction%" }[value] || value;
      if (value.endsWith("%")) operator = "like";
    }
    const inputs = [...groupsRoot.querySelectorAll("input[data-tag]")];
    const input = inputs.find((candidate) =>
      candidate.dataset.tag.toLowerCase() === tag.toLowerCase()
      && candidate.value.toLowerCase() === value.toLowerCase()
      && candidate.dataset.operator === operator
    ) || (operator === "=" && inputs.find((candidate) =>
      candidate.dataset.tag.toLowerCase() === tag.toLowerCase()
      && candidate.dataset.operator === "like"
      && new RegExp("^" + candidate.value.split("%").map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join(".*") + "$", "i").test(value)
    ));
    if (input) {
      input.checked = true;
      input.closest("details").open = true;
      leftover = leftover.replace(match[0], "").trim();
    }
    // Keep unsupported saved filters in the query rather than silently dropping them.
  }
  freeText.value = leftover.replace(/\s+/g, " ");
}

function setExpanded(open) {
  for (const details of groupsRoot.querySelectorAll("details")) details.open = open;
  syncExpandToggle();
}

function syncExpandToggle() {
  const groups = [...groupsRoot.querySelectorAll("details")];
  expandButton.disabled = groups.every((details) => details.open);
  collapseButton.disabled = groups.every((details) => !details.open);
}

renderQuickPresets();
renderFilterGroups();
restoreFromUrl();
update();
syncExpandToggle();

form.addEventListener("input", update);
form.addEventListener("change", update);
form.addEventListener("submit", () => {
  hiddenTerm.value = buildTerm();
});
form.addEventListener("formdata", (event) => {
  for (const key of [...event.formData.keys()]) {
    if (key !== "term") event.formData.delete(key);
  }
});
clearButton.addEventListener("click", clearFilters);
expandButton.addEventListener("click", () => setExpanded(true));
collapseButton.addEventListener("click", () => setExpanded(false));
