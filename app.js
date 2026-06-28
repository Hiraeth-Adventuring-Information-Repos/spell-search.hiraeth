const BASE_QUERY = "{type:page}";

const filterGroups = [
  {
    title: "Spell Level",
    tag: "Spell Level",
    open: true,
    selection: "single",
    values: [
      "Cantrip",
      "1st Level",
      "2nd Level",
      "3rd Level",
      "3rd-Level",
      "4th Level",
      "5th Level",
      "6th",
      "6th Level",
      "7th Level",
      "8th Level",
      "9th Level",
    ],
  },
  {
    title: "Spell School",
    tag: "Spell School",
    open: true,
    selection: "single",
    values: [
      "Abjuration",
      "abjuration",
      "Conjuration",
      "conjuration",
      "Divination",
      "Enchantment",
      "enchantment",
      "Evocation",
      "Illusion",
      "Liminal",
      "Necromancy",
      "necromancy",
      "Transmutation",
    ],
  },
  {
    title: "Class / Spell List",
    tag: "Spell List",
    open: true,
    selection: "multi",
    values: [
      "Antipaladin",
      "Artificer",
      "Bard",
      "Chronurgy",
      "Cleric",
      "Druid",
      "Dunamancy",
      "Fighter",
      "Graviturgy",
      "Illrigger",
      "Paladin",
      "Profane Word",
      "Ranger",
      "Ritual",
      "Rogue",
      "Sorcerer",
      "Warlock",
      "Wizard",
    ],
  },
  {
    title: "Source",
    tag: "Source",
    open: false,
    selection: "single",
    values: [
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
      "Guildmasters' Guide to Ravnica",
      "Guildmasters’ Guide to Ravnica",
      "Heliana's Guide to Monster Hunting: Part 1",
      "Heliana’s Guide to Monster Hunting: Part 1",
      "Heliana’s Guide to Monster Hunting: Part 2",
      "Hiraeth",
      "Humblewood Campaign Setting",
      "Icewind Dale: Rime of the Frostmaiden",
      "Jax SN Johnson",
      "Kobold Press",
      "Lairs of Etharis",
      "Lost Laboratory of Kwalish",
      "MCDM",
      "Mystic Arts",
      "Nardo D&D",
      "Obojima: Tales from the Tall Grass",
      "Pirate Campaign Compendium",
      "Planescape: Adventures in the Multiverse",
      "Player's Handbook",
      "Player’s Handbook",
      "Player's Handbook (2024)",
      "Players Handbook 2024",
      "schadenfreudestudios",
      "Scott Reichelt",
      "Spelljammer: Adventures in Space",
      "Strixhaven: A Curriculum of Chaos",
      "Sword Coast Adventurer's Guide",
      "Tal’Dorei Campaign Setting Reborn",
      "Tales from the Shadows",
      "Tasha's Cauldron of Everything",
      "Tasha’s Cauldron of Everything",
      "The Book of Many Things",
      "The Crooked Moon",
      "The Crooked Moon Part One: Player Options & Campaign Setting",
      "The Illrigger Revised",
      "Tome of Heroes",
      "Unknown",
      "Valda’s Spire of Secrets: Player Pack",
      "Xanathar's Guide to Everything",
    ],
  },
  {
    title: "Role",
    tag: "role",
    open: true,
    selection: "multi",
    values: [
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
      "utility",
    ],
  },
  {
    title: "Damage Type",
    tag: "damage-type",
    open: true,
    selection: "multi",
    values: [
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
      "variable",
    ],
  },
  {
    title: "Condition",
    tag: "condition",
    open: false,
    selection: "multi",
    values: [
      "blinded",
      "charmed",
      "deafened",
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
      "unconscious",
      "exhaustion",
      "disease",
      "curse",
    ],
  },
  {
    title: "Save",
    tag: "save",
    open: false,
    selection: "multi",
    values: ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "none"],
  },
  {
    title: "Attack",
    tag: "attack",
    open: false,
    selection: "multi",
    values: ["melee spell", "ranged spell", "none"],
  },
  {
    title: "Action",
    tag: "action",
    open: false,
    selection: "multi",
    values: ["action", "bonus action", "reaction", "minute", "hour", "special"],
  },
  {
    title: "Duration",
    tag: "duration",
    open: false,
    selection: "multi",
    values: [
      "instantaneous",
      "concentration",
      "round",
      "minute",
      "ten minutes",
      "hour",
      "eight hours",
      "day",
      "until dispelled",
      "permanent",
      "special",
    ],
  },
  {
    title: "Range",
    tag: "range",
    open: false,
    selection: "multi",
    values: ["self", "touch", "short", "medium", "long", "sight", "unlimited", "special"],
  },
  {
    title: "Area",
    tag: "area",
    open: false,
    selection: "multi",
    values: [
      "self",
      "single target",
      "multiple targets",
      "cone",
      "cube",
      "cylinder",
      "emanation",
      "line",
      "radius",
      "sphere",
      "wall",
    ],
  },
  {
    title: "Component",
    tag: "component",
    open: false,
    selection: "multi",
    values: ["verbal", "somatic", "material", "costly", "consumed"],
  },
  {
    title: "Mechanic",
    tag: "mechanic",
    open: false,
    selection: "multi",
    values: [
      "banishment",
      "difficult-terrain",
      "dunamancy",
      "friendly-fire",
      "forced-movement",
      "resurrection",
      "ritual",
      "shapechanging",
      "summoning",
      "temporary-hit-points",
      "teleportation",
      "upcast",
    ],
  },
];

const quickPresets = [
  {
    label: "Cantrips",
    tags: [["Spell Level", "Cantrip"]],
  },
  {
    label: "3rd-level wizard",
    tags: [
      ["Spell Level", "3rd Level"],
      ["Spell List", "Wizard"],
    ],
  },
  {
    label: "Hiraeth spells",
    tags: [["Source", "Hiraeth"]],
  },
  {
    label: "Fire damage",
    tags: [
      ["role", "damage"],
      ["damage-type", "fire"],
    ],
  },
  {
    label: "Healing",
    tags: [["role", "healing"]],
  },
  {
    label: "Control",
    tags: [["role", "control"]],
  },
  {
    label: "Rituals",
    tags: [["mechanic", "ritual"]],
  },
  {
    label: "Concentration",
    tags: [["duration", "concentration"]],
  },
  {
    label: "Teleportation",
    tags: [["mechanic", "teleportation"]],
  },
  {
    label: "Summoning",
    tags: [["role", "summoning"]],
  },
];

const form = document.querySelector("#spell-search-form");
const freeText = document.querySelector("#free-text");
const hiddenTerm = document.querySelector("#bookstack-term");
const resultCount = document.querySelector("#result-count");
const groupsRoot = document.querySelector("#filter-groups");
const quickRoot = document.querySelector("#quick-presets");
const clearButton = document.querySelector("[data-clear]");
const expandToggle = document.querySelector("[data-expand-toggle]");

function slug(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function tagTerm(tag, value) {
  return `[${tag}=${value}]`;
}

function normalizeText(value) {
  return String(value).trim().replace(/\s+/g, " ");
}

function selectedInputs() {
  return [...groupsRoot.querySelectorAll("input[data-tag]:checked")];
}

function buildTerm() {
  const words = normalizeText(freeText.value);
  const filters = selectedInputs().map((input) => tagTerm(input.dataset.tag, input.value));
  return [BASE_QUERY, words, ...filters].filter(Boolean).join(" ");
}

function update() {
  const term = buildTerm();
  const selected = selectedInputs();
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
  for (const [tag, value] of tags) {
    const input = groupsRoot.querySelector(`input[data-tag="${CSS.escape(tag)}"][value="${CSS.escape(value)}"]`);
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
    details.open = group.open;

    const summary = document.createElement("summary");
    summary.id = `summary-${slug(group.tag)}`;
    summary.textContent = `${group.title} (${group.values.length})`;
    details.append(summary);
    details.addEventListener("toggle", syncExpandToggle);

    const body = document.createElement("div");
    body.className = "group-body";

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

    group.values.forEach((value, index) => {
      const optionId = `option-${slug(group.tag)}-${index}-${slug(value)}`;
      const label = document.createElement("label");
      label.className = "option";
      label.dataset.optionText = `${group.title} ${group.tag} ${value}`.toLowerCase();

      const input = document.createElement("input");
      input.type = group.selection === "single" ? "radio" : "checkbox";
      input.name = group.selection === "single" ? `filter-${slug(group.tag)}` : optionId;
      input.id = optionId;
      input.value = value;
      input.dataset.tag = group.tag;

      const text = document.createElement("span");
      text.className = "option-text";
      text.textContent = value;

      if (group.selection === "single") {
        const meta = document.createElement("span");
        meta.className = "option-meta";
        meta.setAttribute("aria-hidden", "true");
        meta.textContent = "single";
        text.append(meta);
      }

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

  let leftover = term.replace(BASE_QUERY, "").trim();
  for (const match of term.matchAll(/\[([^=\]]+)=([^\]]+)\]/g)) {
    const [, tag, value] = match;
    const input = groupsRoot.querySelector(`input[data-tag="${CSS.escape(tag)}"][value="${CSS.escape(value)}"]`);
    if (input) {
      input.checked = true;
      input.closest("details").open = true;
    }
    leftover = leftover.replace(match[0], "").trim();
  }
  freeText.value = leftover.replace(/\s+/g, " ");
}

function setExpanded(open) {
  for (const details of groupsRoot.querySelectorAll("details")) details.open = open;
  syncExpandToggle();
}

function syncExpandToggle() {
  const allOpen = [...groupsRoot.querySelectorAll("details")].every((details) => details.open);
  expandToggle.textContent = allOpen ? "Collapse all" : "Expand all";
  expandToggle.setAttribute("aria-expanded", String(allOpen));
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
expandToggle.addEventListener("click", () => {
  const anyClosed = [...groupsRoot.querySelectorAll("details")].some((details) => !details.open);
  setExpanded(anyClosed);
});
