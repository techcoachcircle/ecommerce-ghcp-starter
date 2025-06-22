import base64  
import os  
import pytest  
import pytest_html  
from pytest_metadata.plugin import metadata_key  
  
  
def pytest_html_report_title(report):  
    report.title = "Pytest HTML Report Example"  
  
  
 
  
@pytest.hookimpl(hookwrapper=True)  
def pytest_runtest_makereport(item):  
    outcome = yield  
    report = outcome.get_result()  
    extra = getattr(report, "extra", [])  
    if report.when == "call":  
        # Capture screenshot if the test failed
        if report.failed:  
            print(f"Test {item.name} failed, capturing screenshot...")
            if "page" in item.fixturenames:
                page = item.funcargs["page"]
                screenshot = page.screenshot(full_page=True)
                screenshot_base64 = base64.b64encode(screenshot).decode("utf-8")
                extra.append(pytest_html.extras.image(screenshot_base64, "Screenshot"))
            else:
                print(f"No 'page' fixture found for test {item.name}")
        report.extra = extra
