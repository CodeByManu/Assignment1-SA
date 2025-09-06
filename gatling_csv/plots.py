import os
import re
import pandas as pd
import matplotlib.pyplot as plt

# Carpeta raíz donde están los CSV
root_dir = "./"  # ajusta si es necesario

for folder, _, files in os.walk(root_dir):
    for file in files:
        if file.endswith(".csv") and file.startswith("stats"):
            filepath = os.path.join(folder, file)
            
            # Leer CSV
            df = pd.read_csv(filepath)
            
            # Extraer CPU%
            df['CPU%'] = df['CPU%'].str.replace('%','').astype(float)
            
            # Extraer Memoria usada
            mem_split = df['MemUsage'].str.split(' / ', expand=True)
            df['MemUsed'] = mem_split[0].str.replace('MiB','').astype(float)
            
            # Filtrar CPU% >= 2.2
            df = df[df['CPU%'] >= 2.2]
            if df.empty:
                print(f"⚠️ {file} no tiene datos con CPU >= 2.2%")
                continue
            
            # Número de requests (multiplicar el número del archivo por 300)
            m = re.search(r"-(\d+)\.csv", file)
            total_requests = int(m.group(1)) * 300 if m else 0
            
            # Crear figura
            fig, ax1 = plt.subplots(figsize=(10,5))
            
            # Área CPU
            ax1.fill_between(range(len(df)), df['CPU%'], color='blue', alpha=0.3, label='CPU%')
            ax1.set_ylabel('CPU (%)', color='blue')
            ax1.tick_params(axis='y', labelcolor='blue')
            
            # Línea memoria
            ax2 = ax1.twinx()
            ax2.plot(df['MemUsed'], color='red', label='MemUsed (MiB)')
            ax2.set_ylim(0, 1024)  # Escala fija en 1 GiB
            ax2.set_ylabel('Memoria (MiB)', color='red')
            ax2.tick_params(axis='y', labelcolor='red')
            
            # Título
            ax1.set_title(f"{file} - Total Requests: {total_requests}")
            
            # Guardar
            outpath = os.path.join(folder, file.replace(".csv",".png"))
            plt.tight_layout()
            plt.savefig(outpath)
            plt.close()
            
            print(f"✅ Gráfico generado: {outpath}")
