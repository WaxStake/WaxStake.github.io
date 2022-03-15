import streamlit as st
import os
import numpy as np
import time
import requests
import json
import webbrowser
import selenium.webdriver as webdriver


from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By

from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys

### ประกาศค่าตัวแปร ############
rentday = st.number_input('จำนวน วัน ยืม wax'   , 1, 30, 1, 1)
rentwax = st.number_input('ต้องการยืม wax จำนวน', 50, 1000, 50, 50)

rentdaytxt = str(rentday)
rent100 = rentday
rent200 = rentday*2
rent500 = rentday*5
rentxxx = rentwax
rentwaxtxt = str(rentwax*0.10)

## function

def submit():
    secs_to_wait = 5
    status = st.empty()
    for i in range(secs_to_wait, 0, -1):
        time.sleep(1)
        status.text(" %ss..." % i)

    ###########################################################
    my_bar = st.progress(0)
    for i in range(100):
        my_bar.progress(i + 1)
        time.sleep(0.1)
    st.success("working.....  กำลังรันดำเนินงาน......")
    ############################################################


    my_bar = st.progress(0)
    for i in range(100):
        my_bar.progress(i + 1)
        time.sleep(.5)
    st.success("Success ...... staking สำเร็จ หากstakingไม่ติดโปรดติดต่อ แอดมิน โทร 0834234324")

def waxblance():
    
    API_endpoint = 'https://wax.pink.gg/v1/chain/get_table_rows'

    acc_name = wamid

    json_data = {
        "json": True,
        "limit": 100,
        "code": "eosio.token",
        "table": "accounts",
        "scope": f"{acc_name}"
        
    }

    prev_balance = float(json.loads(requests.post(url =API_endpoint, json = json_data).content)['rows'][0]['balance'][:-4])
    waxp_balance = json.loads(requests.post(url =API_endpoint, json = json_data).content)['rows'][0]['balance']

    st.text(prev_balance)
    st.text(waxp_balance)


def loginwaxid():
    try:
        webbrowser.open('https://all-access.wax.io/cloud-wallet/login/', new=1, autoraise=True)
        
    except: pass
  
        
 ############################################################
            
col11, col21, col31 = st.columns(3)
with col11:
    wamid = st.text_input('Wax ID')
    if st.button('wax balance'):
        waxblance()

    if st.button('Login'):
        loginwaxid()
        


col1, col2, col3, col4 = st.columns(4)
with col1:
    st.header("100 WAX")
    st.text("staked for " + rentdaytxt+" day")
    if st.button("Paid "+ str(rent100) + " Wax for "+ rentdaytxt +" day"):
        submit()
        

with col2:
    st.header("200 WAX")
    st.text("staked for " + rentdaytxt+" day")
    if st.button("Paid "+ str(rent200) + " Wax for "+ rentdaytxt +" day"):
        submit()    

with col3:
    st.header("500 WAX")
    st.text("staked for " + rentdaytxt+" day")
    if st.button("Paid "+ str(rent500) + " Wax for "+ rentdaytxt +" day"):
        submit()

with col4:
    st.header(str(rentxxx)+"   WAX")
    st.text("staked for " + rentdaytxt+" day")        
    if st.button("Paid "+ str(rentwaxtxt) + " Wax for "+ rentdaytxt +" day"):
        submit()
    
