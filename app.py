import pandas as pd
import numpy as np
import psycopg2
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import Flask, jsonify, render_template
from flask_cors import CORS


#############################################################################
##DATABASE SET UP
# <<<<<<< HEAD
engine = create_engine('postgresql://postgres:Sunnyisblack182!@localhost/DogsandCats')
# =======
# engine = create_engine('postgresql://postgres:Sunnyisblack182!@localhost/DogsandCats')
# >>>>>>> 622ced76c4443513abbe54cdbebdf6cbed1cecc0
conn = engine.connect()

##Flask Setup
app = Flask(__name__)
CORS(app)

##Flask Route to ipynb jobs dataframe
@app.route("/live_export")
def exports():
    exports_df= pd.read_sql("select * from exports", conn)
    export_data = exports_df.to_json(orient='records')
    return export_data



if __name__ == '__main__':
    app.run(debug=True)