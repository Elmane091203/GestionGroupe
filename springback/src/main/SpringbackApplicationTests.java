package com.projet.springback;

import com.projet.springback.model.Etudiant;
import com.projet.springback.model.Groupe;
import com.projet.springback.model.Sujet;
import com.projet.springback.repository.RepertoirEtudiant;
import com.projet.springback.repository.RepertoireGroupe;
import com.projet.springback.repository.RepertoireSujet;
import com.projet.springback.service.GroupeService;
import com.projet.springback.service.GroupeServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class SpringbackApplicationTests {

    @Autowired
    RepertoireGroupe repertoireGroupe;
    @Autowired
    RepertoirEtudiant repertoirEtudiant;
    @Autowired
    RepertoireSujet repertoireSujet;
    @Autowired
    GroupeService groupeService;

    @Test
    void contextLoads() {
        if (((List<Etudiant>) repertoirEtudiant.findAll()).size() == 0) {
            repertoirEtudiant.save(new Etudiant("Djaanffar Houmadi", "Elmane", "elmane@groupeisi.com"));
            repertoirEtudiant.save(new Etudiant("Kone", "Ousseynou", "ousseynou@groupeisi.com"));
            repertoirEtudiant.save(new Etudiant("Coly", "Mama Dieynaba", "mcoly@groupeisi.com"));
            repertoirEtudiant.save(new Etudiant("Bah", "Alpha Souleymane", "bas@groupeisi.com"));
            repertoirEtudiant.save(new Etudiant("Sagna", "Youssouph", "youssouph@groupeisi.com"));
            repertoirEtudiant.save(new Etudiant("Sow", "Mouhamadou Bobo", "bobosow@groupeisi.com"));
            repertoirEtudiant.save(new Etudiant("Ndao", "Adama Kalidou", "kalidou@groupeisi.com"));
            repertoirEtudiant.save(new Etudiant("Sy", "Hawa", "hawasy@groupeisi.com"));
        }
        if (((List<Sujet>) repertoireSujet.findAll()).size() == 0) {
            repertoireSujet.save(new Sujet("Maven"));
            repertoireSujet.save(new Sujet("Git"));
        }
    }

    @Test
    void testRandE() {

    }

    @Test
    void testRand() {

    }

    @Test
    void testGenerGroupe() {
        List<Groupe> l = (List<Groupe>) repertoireGroupe.findAll();
        int t = 0;
        for (int i = 0; i < groupeService.listDesGroupes().size(); i++) {
            t+=groupeService.listDesGroupes().get(i).size();
        }
        if (l.size() == t) {
            System.out.println("La methode fonctionne");
        }
    }
}
