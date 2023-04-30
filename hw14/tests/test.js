require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until, Select} = require('selenium-webdriver');
describe('Checkout Google.com', () => {
    /* Run command:
     * 'npm test' from 'hw14' folder to start testing 
     * 'npm run selenium-test' from root folder to start testing
     */
    let  driver;
    let actions;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        driver.manage().setTimeouts({ implicit: 10000 });
        driver.manage().window().maximize();
        actions = driver.actions();
    });
    it('State of element activity', async function() {
        await driver.get('http://the-internet.herokuapp.com/dropdown');
        const dropdown = driver.findElement(By.id('dropdown'));
        const firstEl = dropdown.findElement(By.xpath('/option[@disabled]'));
        const secondEl = dropdown.findElement(By.xpath('/option[@value="1"]')).isEnabled();

        assert.ok(firstEl, 'Element is active');
        assert.ok(secondEl, 'Element is not active');
    });
    it('Hovering the mouse over an element', async function() {
        await driver.get('http://the-internet.herokuapp.com/hovers');

        const picture = driver.findElement(By.css('div.figure'));
        await actions.move({ duration: 500, origin: picture }).perform();

        const textElement = driver.wait(until.elementLocated(By.xpath('//h5[contains(text(), "name:")]')), 5000);

        const text = await textElement.getText();

        assert.ok(text.includes('name: user1'), 'Text not found');
    });
    it('Filling out the form', async function() {
        await driver.get('http://formy-project.herokuapp.com/form');
        const firstName = driver.findElement(By.id('first-name'));
        const lastName = driver.findElement(By.id('last-name'));
        const jobTitle = driver.findElement(By.id('job-title'));
        const dropdown = driver.findElement(By.id('select-menu'));
        const select = new Select(dropdown);
        const date = driver.findElement(By.id('datepicker'));
        
        await firstName.click();
        await firstName.clear();
        await firstName.sendKeys('Peter');

        await lastName.click();
        await lastName.clear();
        await lastName.sendKeys('Peterson');

        await jobTitle.click();
        await jobTitle.clear();
        await jobTitle.sendKeys('tester');

        await driver.findElement(By.id('radio-button-1')).click();

        await driver.findElement(By.id('checkbox-1')).click();

        await select.selectByValue('2');

        await date.click();
        await date.clear();
        await date.sendKeys('12/12/2020');

        await driver.findElement(By.xpath('//a[contains(text(),"Submit")]')).click();

        const isPresent = driver.wait(until.elementLocated(By.xpath('//div[contains(text(),"The form was successfully submitted!")]')), 10000)
            .then(() => true)
            .catch(() => false);

        assert.ok(isPresent, 'Form has not been submitted!');
    });
    it('Sorting the table', async function() {
        await driver.get('http://the-internet.herokuapp.com/tables');

        const table = driver.findElement(By.id('table2'));
        await driver.executeScript("arguments[0].scrollIntoView()", table);

        await table.findElement(By.css('span.dues')).click();

        const cells = await table.findElements(By.css('span.dues'));
        const sorted = await Promise.all(cells.map(async cell => await cell.getText()));

        assert.deepEqual(sorted, sorted.sort(), 'The values of the cells of the "Due" column are not sorted in ascending order');
    });
    after(() => driver && driver.quit());
})
