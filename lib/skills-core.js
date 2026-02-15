/**
 * Superpowers Prompt-ified Core
 *
 * This is the prompt-based version of superpowers.
 * Instead of using scripts and hooks, all functionality
 * is implemented through prompts in the user's system prompt.
 */

/**
 * Extract YAML frontmatter from a skill file.
 * @param {string} filePath - Path to SKILL.md file
 * @returns {{name: string, description: string}}
 */
function extractFrontmatter(filePath) {
    const fs = require('fs');
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    let inFrontmatter = false;
    let name = '';
    let description = '';

    for (const line of lines) {
        if (line.trim() === '---') {
            if (!inFrontmatter) {
                inFrontmatter = true;
            } else {
                break;
            }
            continue;
        }

        if (!inFrontmatter) continue;

        const nameMatch = line.match(/^name:\s*(.+)$/);
        if (nameMatch) {
            name = nameMatch[1].trim();
            continue;
        }

        const descMatch = line.match(/^description:\s*(.+)$/);
        if (descMatch) {
            description = descMatch[1].trim();
            continue;
        }
    }

    return { name, description };
}

/**
 * Get all available skills
 * @returns {{name: string, description: string}[]}
 */
function getAllSkills() {
    const fs = require('fs');
    const path = require('path');

    const skillsDir = path.join(__dirname, '..', 'skills');
    const skillDirs = fs.readdirSync(skillsDir, { withFileTypes: false });

    const skills = [];

    for (const skillDir of skillDirs) {
        const skillPath = path.join(skillsDir, skillDir, 'SKILL.md');
        if (fs.existsSync(skillPath)) {
            try {
                const skill = extractFrontmatter(skillPath);
                skills.push(skill);
            } catch (error) {
                console.error(`Failed to load skill: ${skillDir}`, error.message);
            }
        }
    }

    return skills;
}

/**
 * Get all available commands
 * @returns {{name: string, description: string}[]}
 */
function getAllCommands() {
    const fs = require('fs');
    const path = require('path');

    const commandsDir = path.join(__dirname, '..', 'commands');
    const commandFiles = fs.readdirSync(commandsDir)
        .filter(f => f.endsWith('.md'));

    const commands = [];

    for (const commandFile of commandFiles) {
        const commandPath = path.join(commandsDir, commandFile);
        try {
            const command = extractFrontmatter(commandPath);
            commands.push(command);
        } catch (error) {
            console.error(`Failed to load command: ${commandFile}`, error.message);
        }
    }

    return commands;
}

// Export functions for use in prompts
module.exports = {
    extractFrontmatter,
    getAllSkills,
    getAllCommands
};
