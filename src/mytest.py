import os

def recherche_mot(dossier, mot):
    for root, dirs, files in os.walk(dossier):
        for file in files:
            chemin_fichier = os.path.join(root, file)
            try:
                with open(chemin_fichier, 'r', encoding='utf-8') as f:
                    contenu = f.read()
                    if mot in contenu:
                        print(f"Le mot '{mot}' a été trouvé dans le fichier : {chemin_fichier}")
            except (IOError, UnicodeDecodeError):
                pass

recherche_mot(".","Source")